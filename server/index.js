import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'

const app = express()
// Use a dedicated var, NOT the ambient PORT (dev launchers/preview tools often
// inject PORT for the *frontend*, which would collide with Vite on 5173).
const PORT = process.env.UNWELLO_SERVER_PORT || 3001
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001'
const API_KEY = process.env.ANTHROPIC_API_KEY

app.use(cors())
app.use(express.json({ limit: '1mb' }))

const client = API_KEY ? new Anthropic({ apiKey: API_KEY }) : null

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY
const reviewsCache = new Map() // query -> { data, expiresAt }
const REVIEWS_CACHE_TTL_MS = 60 * 60 * 1000 // 1 hour, to limit paid API calls

// System prompt for the patient-intake assistant.
const SYSTEM_PROMPT = `You are the Unwello assistant, a friendly guide for a medical-tourism platform that connects patients with vetted clinics in Thailand.

Your job:
- Help visitors understand treatments available in Thailand (dental & implants, hair transplant, rhinoplasty, plastic surgery, weight-loss surgery, fertility/IVF), rough price ranges, and how the process works.
- Explain that Unwello is free for patients (paid by clinics), assigns a personal coordinator, and arranges clinics, quotes, travel, interpreter and aftercare.
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
  console.log(`\n  Unwello backend running on http://localhost:${PORT}`)
  console.log(`  AI assistant: ${client ? 'configured ✅ (model: ' + MODEL + ')' : 'NOT configured ⚠️  — add ANTHROPIC_API_KEY to server/.env'}`)
  console.log(`  Google reviews: ${GOOGLE_PLACES_API_KEY ? 'configured ✅' : 'NOT configured ⚠️  — add GOOGLE_PLACES_API_KEY to server/.env'}\n`)
})
