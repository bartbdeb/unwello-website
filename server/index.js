import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import { getArticleViews } from './ga4.js'

const app = express()
// Use a dedicated var, NOT the ambient PORT (dev launchers/preview tools often
// inject PORT for the *frontend*, which would collide with Vite on 5173).
const PORT = process.env.HOSPIGO_SERVER_PORT || 3001
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001'
const API_KEY = process.env.ANTHROPIC_API_KEY

app.use(cors())
app.use(express.json({ limit: '1mb' }))

const client = API_KEY ? new Anthropic({ apiKey: API_KEY }) : null

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY

const RESEND_API_KEY = process.env.RESEND_API_KEY
const LEAD_NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL || 'info@hospigo.com'
const LEAD_FROM_EMAIL = process.env.LEAD_FROM_EMAIL || 'quotes@hospigo.com'
const reviewsCache = new Map() // query -> { data, expiresAt }
const REVIEWS_CACHE_TTL_MS = 60 * 60 * 1000 // 1 hour, to limit paid API calls

// Real per-article view counts for the Newsroom. Seeded with the numbers the
// site launched with (see client/src/content/news.ts) so existing articles
// don't visibly drop to 0 the moment this went live — from here on every
// number moves only because a real page load happened.
// NOTE: persisted to a JSON file on local disk. Render's free tier does NOT
// keep local disk across deploys/restarts, so counts will reset to the seed
// values on redeploy until this is moved onto a real database or a Render
// persistent disk is attached.
const SEED_VIEWS = {
  'dental-costs-thailand': 6240,
  'thailand-medical-visa-guide-2026': 4890,
  'best-recovery-hotels-bangkok': 3150,
  'what-is-jci-accreditation': 2780,
  'choosing-a-medical-coordinator': 2410,
  'medical-tourism-insurance-thailand': 1930,
  'bangkok-vs-phuket-vs-chiang-mai': 3560,
  'medical-tourism-safety-checklist': 2050,
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const VIEW_COUNTS_FILE = path.join(__dirname, 'data', 'view-counts.json')

function loadViewCounts() {
  try {
    const raw = JSON.parse(fs.readFileSync(VIEW_COUNTS_FILE, 'utf-8'))
    return { ...SEED_VIEWS, ...raw }
  } catch {
    return { ...SEED_VIEWS }
  }
}

function saveViewCounts(counts) {
  fs.mkdirSync(path.dirname(VIEW_COUNTS_FILE), { recursive: true })
  fs.writeFileSync(VIEW_COUNTS_FILE, JSON.stringify(counts, null, 2))
}

const viewCounts = loadViewCounts()

// System prompt for the patient-intake assistant.
const SYSTEM_PROMPT = `You are the Hospigo assistant, a friendly guide for a medical-tourism platform that connects patients with vetted clinics in Thailand.

Your job:
- Help visitors understand treatments available in Thailand (dental & implants, hair transplant, rhinoplasty, plastic surgery, weight-loss surgery, fertility/IVF), rough price ranges, and how the process works.
- Explain that Hospigo is free for patients (paid by clinics), assigns a personal coordinator, and arranges clinics, quotes, travel, interpreter and aftercare.
- Gently guide interested users toward requesting a free, no-obligation quote (there is a "Start my free quote" button in the chat).

Rough indicative prices in Thailand (all-inclusive, USD): dental implant from $680; hair transplant (FUE) from $2,400; rhinoplasty from $3,300; plastic surgery from $3,900; gastric sleeve from $8,500; IVF cycle from $4,100. These are starting points — a personal quote is tailored.

Rules:
- You are NOT a doctor. Do not give medical advice, diagnoses, or treatment recommendations. For clinical questions, say a coordinator or the clinic's doctors will advise, and suggest requesting a quote.
- Be concise, warm, and practical. Keep replies to a few short sentences.
- Only discuss Thailand — this platform is Thailand-only.
- Never invent specific clinic names or make guarantees about outcomes.`

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, aiConfigured: !!client, model: MODEL })
})

app.get('/api/views', async (_req, res) => {
  const ga4Views = await getArticleViews()
  // Real GA4 numbers when available; self-hosted counter as fallback for any
  // slug GA4 hasn't reported yet (e.g. brand-new articles, or GA4 not
  // configured at all) — never silently show 0 for a real, published article.
  res.json(ga4Views ? { ...viewCounts, ...ga4Views } : viewCounts)
})

app.post('/api/views/:slug', (req, res) => {
  const { slug } = req.params
  viewCounts[slug] = (viewCounts[slug] || 0) + 1
  saveViewCounts(viewCounts)
  res.json({ slug, views: viewCounts[slug] })
})

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

// Notifies info@hospigo.com by email when a patient submits the quote
// funnel or the AI chat. This is the ONLY place an inquiry actually reaches
// the team — the client also keeps a local copy in localStorage, but that
// never leaves the visitor's own browser.
app.post('/api/leads', async (req, res) => {
  const { treatment, whoFor, timing, contactPref, first, last, email, phone, source } = req.body || {}
  if (!String(first || '').trim() || !String(email || '').trim()) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' })
  }

  if (!RESEND_API_KEY) {
    console.warn('[leads] RESEND_API_KEY not configured — lead NOT emailed:', { first, last, email, treatment })
    return res.json({ ok: true, emailed: false })
  }

  const html = `
    <h2>New quote request</h2>
    <p><strong>Name:</strong> ${escapeHtml(first)} ${escapeHtml(last || '')}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || '—')}</p>
    <p><strong>Treatment:</strong> ${escapeHtml(treatment || '—')}</p>
    <p><strong>Who for:</strong> ${escapeHtml(whoFor || '—')}</p>
    <p><strong>Timing:</strong> ${escapeHtml(timing || '—')}</p>
    <p><strong>Preferred contact method:</strong> ${escapeHtml(contactPref || '—')}</p>
    <p><strong>Source:</strong> ${escapeHtml(source || 'funnel')}</p>
  `.trim()

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: `Hospigo Leads <${LEAD_FROM_EMAIL}>`,
        to: LEAD_NOTIFY_EMAIL,
        reply_to: email,
        subject: `New quote request — ${treatment || 'General inquiry'} (${first} ${last || ''})`.trim(),
        html,
      }),
    })
    if (!r.ok) {
      console.error('[leads] Resend error:', r.status, await r.text())
      return res.status(502).json({ ok: false, error: 'email_failed' })
    }
    res.json({ ok: true, emailed: true })
  } catch (err) {
    console.error('[leads] error:', err?.message || err)
    res.status(500).json({ ok: false, error: 'leads_failed' })
  }
})

app.post('/api/chat', async (req, res) => {
  if (!client) {
    return res.json({
      reply:
        "The AI assistant isn't configured yet (no API key on the server). You can still get a free quote using the button below, and a human coordinator will help you directly.",
      aiConfigured: false,
    })
  }

  try {
    const incoming = Array.isArray(req.body?.messages) ? req.body.messages : []
    // Sanitize: only role + string content, cap history length.
    const messages = incoming
      .filter((m) => (m?.role === 'user' || m?.role === 'assistant') && typeof m.content === 'string')
      .slice(-20)
      .map((m) => ({ role: m.role, content: m.content }))

    if (messages.length === 0) {
      return res.status(400).json({ error: 'No messages provided.' })
    }

    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages,
    })

    const reply = response.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim()

    res.json({ reply: reply || "Sorry, I didn't catch that — could you rephrase?", aiConfigured: true })
  } catch (err) {
    console.error('[chat] error:', err?.message || err)
    res.status(500).json({
      reply: 'Sorry, something went wrong reaching the assistant. Please try again, or request a free quote and a coordinator will help.',
      error: 'chat_failed',
    })
  }
})

// Real Google reviews for a real, named facility — via Google Places API
// (Find Place -> Place Details with fields=reviews,rating,user_ratings_total).
// Trustpilot was evaluated but isn't viable here: its API only surfaces
// reviews for businesses that have signed up for a Trustpilot Business
// account, and most Thai hospitals aren't on Trustpilot at all. Google Maps
// listings exist for virtually every real facility, so Places API is the
// only practical source of genuine third-party reviews for this data.
app.get('/api/reviews', async (req, res) => {
  const name = String(req.query.name || '').trim()
  const city = String(req.query.city || '').trim()
  if (!name) return res.status(400).json({ error: 'Missing name query param.' })

  if (!GOOGLE_PLACES_API_KEY) {
    return res.json({
      configured: false,
      message: 'Live Google reviews aren\'t connected yet — add GOOGLE_PLACES_API_KEY to server/.env to enable them.',
    })
  }

  const cacheKey = `${name}|${city}`
  const cached = reviewsCache.get(cacheKey)
  if (cached && cached.expiresAt > Date.now()) {
    return res.json(cached.data)
  }

  try {
    const query = encodeURIComponent(`${name} ${city} Thailand hospital`)
    const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=place_id,name&key=${GOOGLE_PLACES_API_KEY}`
    const findRes = await fetch(findUrl).then((r) => r.json())

    const placeId = findRes?.candidates?.[0]?.place_id
    if (!placeId) {
      const notFound = { configured: true, found: false }
      reviewsCache.set(cacheKey, { data: notFound, expiresAt: Date.now() + REVIEWS_CACHE_TTL_MS })
      return res.json(notFound)
    }

    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,url,reviews&key=${GOOGLE_PLACES_API_KEY}`
    const details = await fetch(detailsUrl).then((r) => r.json())
    const result = details?.result

    if (!result) {
      const notFound = { configured: true, found: false }
      reviewsCache.set(cacheKey, { data: notFound, expiresAt: Date.now() + REVIEWS_CACHE_TTL_MS })
      return res.json(notFound)
    }

    const payload = {
      configured: true,
      found: true,
      googleName: result.name,
      rating: result.rating ?? null,
      userRatingsTotal: result.user_ratings_total ?? 0,
      googleMapsUrl: result.url ?? null,
      reviews: (result.reviews || []).slice(0, 5).map((r) => ({
        author: r.author_name,
        rating: r.rating,
        relativeTime: r.relative_time_description,
        text: r.text,
      })),
    }
    reviewsCache.set(cacheKey, { data: payload, expiresAt: Date.now() + REVIEWS_CACHE_TTL_MS })
    res.json(payload)
  } catch (err) {
    console.error('[reviews] error:', err?.message || err)
    res.status(500).json({ configured: true, found: false, error: 'reviews_fetch_failed' })
  }
})

app.listen(PORT, () => {
  console.log(`\n  Hospigo backend running on http://localhost:${PORT}`)
  console.log(`  AI assistant: ${client ? 'configured ✅ (model: ' + MODEL + ')' : 'NOT configured ⚠️  — add ANTHROPIC_API_KEY to server/.env'}`)
  console.log(`  Google reviews: ${GOOGLE_PLACES_API_KEY ? 'configured ✅' : 'NOT configured ⚠️  — add GOOGLE_PLACES_API_KEY to server/.env'}`)
  console.log(`  Lead emails: ${RESEND_API_KEY ? `configured ✅ (to ${LEAD_NOTIFY_EMAIL})` : 'NOT configured ⚠️  — add RESEND_API_KEY to server/.env, quote requests will NOT be emailed'}\n`)
})
