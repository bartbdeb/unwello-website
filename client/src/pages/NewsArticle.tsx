import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { css, El, eyebrow, h2Style } from '../ui'
import { newsArticles, newsBySlug } from '../content/news'
import { categoryBySlug, type PriceRow } from '../content/treatments'
import { countryMeta, type Country } from '../data'
import { useApp } from '../context'
import { useViews } from '../viewsContext'
import FaqAccordion from '../components/FaqAccordion'
import Seo, { SITE_URL } from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { breadcrumbJsonLd, faqJsonLd, truncate } from '../seo'

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function NewsArticle() {
  const { slug = '' } = useParams()
  const { openFunnel } = useApp()
  const { viewsFor, registerView } = useViews()
  const article = newsBySlug(slug)

  useEffect(() => {
    if (article) registerView(article.slug)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article?.slug])

  if (!article) {
    return (
      <section style={css('max-width:820px; margin:0 auto; padding:100px 32px; text-align:center;')}>
        <h1 style={css('font-size:32px; font-weight:800; color:#16214A;')}>Article not found</h1>
        <p style={css('font-size:16px; color:#5A6580; margin:12px 0 24px;')}>We couldn't find that article.</p>
        <Link to="/news" style={css('color:#2B50E4; font-weight:700;')}>← Back to news & guides</Link>
      </section>
    )
  }

  const cat = article.categorySlug ? categoryBySlug(article.categorySlug) : undefined
  const related = newsArticles.filter((a) => a.cat === article.cat && a.slug !== article.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${article.title} | Hospigo`}
        description={truncate(article.excerpt, 158)}
        path={`/news/${article.slug}`}
        image={SITE_URL + article.image}
      />
      <JsonLd
        id="breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'News & Guides', path: '/news' },
          { name: article.cat, path: `/news?cat=${encodeURIComponent(article.cat)}` },
          { name: article.title, path: `/news/${article.slug}` },
        ])}
      />
      {article.faqs.length > 0 && <JsonLd id="faq" data={faqJsonLd(article.faqs)} />}
      {/* ---- Breadcrumb + hero ---- */}
      <section style={css('background:linear-gradient(180deg,#E4EDFF 0px,#F4F7FF 400px);')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:32px 32px 40px;')}>
          <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:22px; flex-wrap:wrap;')}>
            <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
            <span>›</span>
            <Link to="/news" style={css('color:#8B95AD;')}>News & Guides</Link>
            <span>›</span>
            <Link to={`/news?cat=${encodeURIComponent(article.cat)}`} style={css('color:#8B95AD;')}>{article.cat}</Link>
            <span>›</span>
            <span style={css('color:#16214A; font-weight:600;')}>{article.title}</span>
          </div>

          <div style={css('max-width:760px;')}>
            <span style={css(eyebrow)}>{article.cat}</span>
            <h1 style={css('font-size:40px; line-height:1.1; letter-spacing:-.028em; font-weight:800; margin:12px 0 12px; color:#16214A;')}>{article.title}</h1>
            <p style={css('font-size:16.5px; line-height:1.6; color:#5A6580; margin:0 0 18px;')}>{article.dek}</p>
            <div style={css('display:flex; align-items:center; gap:11px; font-size:13.5px; color:#8B95AD; flex-wrap:wrap;')}>
              <span style={css('width:34px; height:34px; border-radius:50%; background:#ECF1FD; display:flex; align-items:center; justify-content:center; font-size:15px;')}>✍️</span>
              <span>{article.author} · Reviewed by <strong style={css('color:#16214A;')}>{article.reviewer.name}</strong>, {article.reviewer.credentials} · Updated {article.date} · {article.read} · 👁 {viewsFor(article.slug, article.views).toLocaleString('en-US')}</span>
            </div>
            {cat && (
              <Link to={`/treatments/${cat.slug}`} style={css('display:inline-flex; align-items:center; gap:8px; margin-top:16px; background:#fff; border:1px solid #E1E8F7; padding:8px 14px 8px 8px; border-radius:100px; font-size:13px; font-weight:600; color:#3A4468;')}>
                <span style={css('font-size:15px;')}>{cat.icon}</span>
                Related: {cat.name} facilities in Thailand →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ---- Cover + TOC + body ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:0 32px 48px;')}>
        <img src={article.image} alt={article.title} style={css('width:100%; height:320px; border-radius:22px; margin-top:-8px; margin-bottom:36px; object-fit:cover; display:block;')} />

        <div className="uw-savings" style={css('display:grid; grid-template-columns:220px 1fr; gap:40px; align-items:start; max-width:920px; margin:0 auto;')}>
          {/* Table of contents */}
          <nav className="uw-hide-mobile" style={css('position:sticky; top:90px; display:flex; flex-direction:column; gap:2px;')}>
            <span style={css('font-size:11px; font-weight:800; color:#8B95AD; letter-spacing:.08em; text-transform:uppercase; margin-bottom:10px;')}>On this page</span>
            {article.sections.map((s) => (
              <a key={s.heading} href={`#${slugify(s.heading)}`} style={css('font-size:13px; color:#5A6580; padding:7px 0 7px 12px; border-left:2px solid #E1E8F7; line-height:1.4;')}>{s.heading}</a>
            ))}
            {article.faqs.length > 0 && (
              <a href="#faqs" style={css('font-size:13px; color:#5A6580; padding:7px 0 7px 12px; border-left:2px solid #E1E8F7; line-height:1.4;')}>FAQs</a>
            )}
          </nav>

          <div>
            {article.sections.map((s, i) => (
              <div key={s.heading} id={slugify(s.heading)} style={css('scroll-margin-top:24px; margin-bottom:30px;')}>
                <h2 style={css('font-size:22px; font-weight:800; margin:0 0 14px; color:#16214A; letter-spacing:-.01em;')}>{s.heading}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} style={css('font-size:16px; line-height:1.75; color:#3A4468; margin:0 0 16px;')}>{p}</p>
                ))}
                {i === 0 && article.costTable && <CostTable rows={article.costTable} />}
              </div>
            ))}

            <div style={css('background:#E9F0FF; border-radius:18px; padding:22px 24px; margin:28px 0; display:flex; align-items:center; gap:16px; flex-wrap:wrap; justify-content:space-between;')}>
              <div>
                <div style={css('font-weight:800; font-size:15.5px; color:#16214A; margin-bottom:4px;')}>Have a specific question?</div>
                <div style={css('font-size:13.5px; color:#5A6580;')}>Your coordinator can walk you through it, free and no-obligation.</div>
              </div>
              <El as="button" onClick={() => openFunnel(cat?.name)} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:13px 22px; border-radius:12px; font-weight:700; font-size:14px; cursor:pointer; white-space:nowrap;')} hover={css('background:#1B3AB8;')}>Talk to a coordinator</El>
            </div>

            {article.faqs.length > 0 && (
              <div id="faqs" style={css('scroll-margin-top:24px; margin-top:36px;')}>
                <h2 style={css('font-size:22px; font-weight:800; margin:0 0 16px; color:#16214A; letter-spacing:-.01em;')}>Frequently asked questions</h2>
                <FaqAccordion faqs={article.faqs} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---- Related articles ---- */}
      {related.length > 0 && (
        <section style={css('background:#E9F0FF;')}>
          <div style={css('max-width:1240px; margin:0 auto; padding:48px 32px;')}>
            <span style={css(eyebrow)}>More in {article.cat}</span>
            <h2 style={css(h2Style + ' margin-bottom:24px;')}>Related guides</h2>
            <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px;')}>
              {related.map((a) => (
                <Link key={a.slug} to={`/news/${a.slug}`} style={css('display:block; border:1px solid #E1E8F7; background:#fff; border-radius:16px; padding:18px; color:inherit;')}>
                  <span style={css('font-size:11px; font-weight:800; color:#2B50E4; letter-spacing:.06em; text-transform:uppercase;')}>{a.cat}</span>
                  <h3 style={css('font-size:15.5px; font-weight:700; margin:8px 0 6px; color:#16214A; line-height:1.3;')}>{a.title}</h3>
                  <span style={css('font-size:12.5px; color:#8B95AD;')}>{a.read} · Updated {a.date} · 👁 {viewsFor(a.slug, a.views).toLocaleString('en-US')}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- CTA ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:56px 32px 64px;')}>
        <div style={css('background:linear-gradient(120deg,#2B50E4,#1B3AB8); color:#fff; border-radius:24px; padding:44px; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; box-shadow:0 20px 50px rgba(43,80,228,.24);')}>
          <div>
            <h2 style={css('font-size:28px; font-weight:800; letter-spacing:-.02em; margin:0 0 8px; max-width:520px;')}>Ready to start planning?</h2>
            <p style={css('font-size:15px; color:#D3DEFF; margin:0; max-width:480px;')}>Get a free, no-obligation quote and a coordinator who plans everything around your trip.</p>
          </div>
          <El as="button" onClick={() => openFunnel(cat?.name)} style={css('background:#fff; color:#2B50E4; border:none; padding:15px 30px; border-radius:13px; font-weight:800; font-size:15px; cursor:pointer; white-space:nowrap; box-shadow:0 10px 24px rgba(0,0,0,.16);')} hover={css('background:#EAF0FF;')}>Get your free quote</El>
        </div>
      </section>
    </>
  )
}

function CostTable({ rows }: { rows: PriceRow[] }) {
  const countries = Object.keys(countryMeta) as Country[]
  return (
    <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; overflow:hidden; margin:8px 0 20px; box-shadow:0 10px 26px rgba(35,51,47,.06);')}>
      <div style={css('overflow-x:auto;')}>
        <div style={css('display:grid; grid-template-columns:1.6fr repeat(' + countries.length + ',1fr); min-width:520px; padding:14px 20px; background:#16214A; color:#fff; font-size:12px; font-weight:700; letter-spacing:.03em;')}>
          <span>Procedure</span>
          <span style={css('text-align:right;')}>Thailand</span>
          {countries.map((c) => <span key={c} style={css('text-align:right;')}>{countryMeta[c].label}</span>)}
        </div>
        {rows.map((r) => (
          <div key={r.name} style={css('display:grid; grid-template-columns:1.6fr repeat(' + countries.length + ',1fr); min-width:520px; padding:14px 20px; border-bottom:1px solid #ECF1FD; align-items:center;')}>
            <span style={css('font-weight:700; font-size:13.5px; color:#16214A;')}>{r.name}</span>
            <span style={css('text-align:right; font-weight:800; font-size:13.5px; color:#2B50E4;')}>${r.th.toLocaleString('en-US')}</span>
            {countries.map((c) => (
              <span key={c} style={css('text-align:right; font-size:13px; color:#8B95AD;')}>{countryMeta[c].symbol}{r[c].toLocaleString('en-US')}</span>
            ))}
          </div>
        ))}
      </div>
      <div style={css('padding:12px 20px; font-size:11.5px; color:#8B95AD; text-align:center;')}>Indicative ranges · your personal quote is tailored to your case</div>
    </div>
  )
}
