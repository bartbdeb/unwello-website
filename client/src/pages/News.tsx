import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { css, eyebrow } from '../ui'
import { newsArticles, formatMeta, NEWS_CHAPTERS, type NewsArticle } from '../content/news'
import { useViews } from '../viewsContext'

function FormatPill({ a }: { a: NewsArticle }) {
  return (
    <span style={css('display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:800; color:#2B50E4; background:#ECF1FD; padding:4px 9px; border-radius:100px;')}>
      {formatMeta[a.format].icon} {a.format}
    </span>
  )
}

function ViewCount({ a }: { a: NewsArticle }) {
  const { viewsFor } = useViews()
  return (
    <span style={css('display:inline-flex; align-items:center; gap:4px;')}>
      <span aria-hidden="true">👁</span> {viewsFor(a.slug, a.views).toLocaleString('en-US')}
    </span>
  )
}

export default function News() {
  const [searchParams] = useSearchParams()
  const [filter, setFilter] = useState(searchParams.get('cat') || 'all')
  const [query, setQuery] = useState('')

  const countByCat = (c: string) => newsArticles.filter((a) => a.cat === c).length

  const searched = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return newsArticles
    return newsArticles.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
  }, [query])

  const isBrowsingAll = filter === 'all' && !query
  const filtered = filter === 'all' ? searched : searched.filter((a) => a.cat === filter)

  // "Top stories" is the editorial-picks lead — a big lead + a short secondary
  // list, mirroring NerdWallet's hub. Only shown when browsing everything
  // unfiltered; a filtered/search view goes straight to the sectioned grid.
  const topStories = isBrowsingAll ? newsArticles.filter((a) => a.featured) : []
  const topSlugs = new Set(topStories.map((a) => a.slug))
  const remaining = filtered.filter((a) => !topSlugs.has(a.slug))
  const [lead, ...secondary] = topStories

  // Ordered by the fixed taxonomy, not by article insertion order, so the
  // hub's section order stays stable as chapters gain or lose articles.
  const sections = useMemo(
    () => NEWS_CHAPTERS.map((chapter) => [chapter, remaining.filter((a) => a.cat === chapter)] as const),
    [remaining],
  )

  const railItem = (active: boolean) =>
    'display:flex; align-items:center; justify-content:space-between; gap:10px; width:100%; text-align:left; padding:10px 12px; border-radius:10px; border:none; background:' +
    (active ? '#ECF1FD' : 'transparent') + '; color:' + (active ? '#2B50E4' : '#3A4468') + '; font-weight:' + (active ? '800' : '600') +
    '; font-size:13.5px; cursor:pointer; font-family:inherit; transition:background .15s;'

  return (
    <>
      {/* ---- Masthead ---- */}
      <section style={css('background:linear-gradient(180deg,#E4EDFF 0px,#F4F7FF 260px); border-bottom:1px solid #E1E8F7;')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:28px 32px 30px;')}>
          <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:18px;')}>
            <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
            <span>›</span>
            <span style={css('color:#16214A; font-weight:600;')}>News & Guides</span>
          </div>
          <div style={css('display:flex; align-items:flex-end; justify-content:space-between; gap:24px; flex-wrap:wrap;')}>
            <div>
              <span style={css(eyebrow)}>News & guides</span>
              <h1 style={css('font-size:38px; line-height:1.1; letter-spacing:-.026em; font-weight:800; margin:10px 0 8px; color:#16214A;')}>The Hospigo Newsroom</h1>
              <p style={css('font-size:15.5px; line-height:1.6; color:#5A6580; margin:0; max-width:520px;')}>Costs, visas, safety and recovery — practical, medically reviewed guides for every stage of planning treatment in Thailand.</p>
            </div>
            <div style={css('position:relative; width:100%; max-width:320px;')}>
              <span style={css('position:absolute; left:14px; top:50%; transform:translateY(-50%); font-size:14px; color:#8B95AD;')}>🔍</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search guides…"
                style={css('width:100%; padding:11px 14px 11px 38px; border:1px solid #E1E8F7; border-radius:11px; font-size:14px; background:#fff; outline:none; color:#16214A; font-family:inherit;')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Top stories ---- */}
      {isBrowsingAll && lead && (
        <section style={css('max-width:1240px; margin:0 auto; padding:36px 32px 0;')}>
          <h2 style={css('font-size:12px; font-weight:800; color:#16214A; letter-spacing:.1em; text-transform:uppercase; margin:0 0 16px; padding-bottom:10px; border-bottom:2px solid #16214A; display:inline-block;')}>Top stories</h2>
          <div className="uw-hero" style={css('display:grid; grid-template-columns:1.4fr 1fr; gap:22px; margin-bottom:8px;')}>
            <Link to={`/news/${lead.slug}`} style={css('display:block; background:#fff; border:1px solid #E1E8F7; border-radius:20px; overflow:hidden; color:inherit; box-shadow:0 12px 32px rgba(35,51,47,.06);')}>
              <img src={lead.image} alt={lead.title} style={css('width:100%; height:240px; object-fit:cover; display:block;')} />
              <div style={css('padding:24px;')}>
                <FormatPill a={lead} />
                <h3 style={css('font-size:23px; font-weight:800; margin:12px 0 10px; color:#16214A; line-height:1.28;')}>{lead.title}</h3>
                <p style={css('font-size:14.5px; line-height:1.6; color:#7A85A0; margin:0 0 14px;')}>{lead.excerpt}</p>
                <span style={css('font-size:12.5px; color:#8B95AD; display:flex; align-items:center; gap:8px; flex-wrap:wrap;')}>{lead.read} · Updated {lead.date} · <ViewCount a={lead} /></span>
              </div>
            </Link>
            <div style={css('display:flex; flex-direction:column; gap:0;')}>
              {secondary.map((a) => (
                <Link key={a.slug} to={`/news/${a.slug}`} style={css('display:flex; gap:14px; padding:16px 4px; border-bottom:1px solid #E1E8F7; color:inherit;')}>
                  <img src={a.image} alt={a.title} style={css('width:88px; height:66px; border-radius:11px; object-fit:cover; flex:0 0 auto;')} />
                  <div style={css('min-width:0;')}>
                    <FormatPill a={a} />
                    <h4 style={css('font-size:14.5px; font-weight:700; margin:8px 0 6px; color:#16214A; line-height:1.35;')}>{a.title}</h4>
                    <span style={css('font-size:12px; color:#8B95AD; display:flex; align-items:center; gap:6px; flex-wrap:wrap;')}>{a.read} · Updated {a.date} · <ViewCount a={a} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Rail + sectioned feed ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:36px 32px 64px;')}>
        <div className="uw-clinics-layout" style={css('display:grid; grid-template-columns:220px 1fr; gap:32px; align-items:start;')}>
          {/* Left rail: category browse */}
          <div className="uw-hide-mobile" style={css('position:sticky; top:90px; display:flex; flex-direction:column; gap:18px;')}>
            <div>
              <span style={css('font-size:11px; font-weight:800; color:#8B95AD; letter-spacing:.08em; text-transform:uppercase; display:block; margin-bottom:10px; padding:0 12px;')}>Chapters</span>
              <div style={css('display:flex; flex-direction:column; gap:2px;')}>
                <button onClick={() => setFilter('all')} style={css(railItem(filter === 'all'))}>
                  <span>All guides</span>
                  <span style={css('font-size:11.5px; color:#8B95AD; font-weight:700;')}>{newsArticles.length}</span>
                </button>
                {NEWS_CHAPTERS.map((c) => (
                  <button key={c} onClick={() => setFilter(c)} style={css(railItem(filter === c))}>
                    <span>{c}</span>
                    <span style={css('font-size:11.5px; color:#8B95AD; font-weight:700;')}>{countByCat(c)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile-only filter chips (rail is hidden below 900px) */}
          <div className="uw-show-mobile" style={css('display:none; gap:10px; flex-wrap:wrap; margin-bottom:8px;')}>
            <button onClick={() => setFilter('all')} style={css('border:none; font-family:inherit; font-size:13px; font-weight:700; padding:8px 14px; border-radius:100px; cursor:pointer; ' + (filter === 'all' ? 'background:#2B50E4; color:#fff;' : 'background:#fff; border:1px solid #E1E8F7; color:#5A6580;'))}>All</button>
            {NEWS_CHAPTERS.map((c) => (
              <button key={c} onClick={() => setFilter(c)} style={css('border:none; font-family:inherit; font-size:13px; font-weight:700; padding:8px 14px; border-radius:100px; cursor:pointer; ' + (filter === c ? 'background:#2B50E4; color:#fff;' : 'background:#fff; border:1px solid #E1E8F7; color:#5A6580;'))}>{c}</button>
            ))}
          </div>

          {/* Main feed */}
          <div>
            {filtered.length === 0 ? (
              <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:48px 32px; text-align:center;')}>
                <div style={css('font-size:30px; margin-bottom:10px;')}>🔍</div>
                <h3 style={css('font-size:18px; font-weight:800; color:#16214A; margin:0 0 8px;')}>No guides match that search</h3>
                <p style={css('font-size:14.5px; color:#7A85A0; margin:0;')}>Try a different term, or browse by topic on the left.</p>
              </div>
            ) : isBrowsingAll ? (
              sections.map(([label, articles]) => articles.length > 0 && (
                <div key={label} style={css('margin-bottom:36px;')}>
                  <div style={css('display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;')}>
                    <h3 style={css('font-size:13px; font-weight:800; color:#16214A; letter-spacing:.06em; text-transform:uppercase; margin:0;')}>{label}</h3>
                    <button onClick={() => setFilter(label)} style={css('background:none; border:none; font-family:inherit; font-size:12.5px; font-weight:700; color:#2B50E4; cursor:pointer;')}>See all →</button>
                  </div>
                  <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px;')}>
                    {articles.map((a) => (
                      <ArticleCard key={a.slug} a={a} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px;')}>
                {filtered.map((a) => (
                  <ArticleCard key={a.slug} a={a} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function ArticleCard({ a }: { a: NewsArticle }) {
  return (
    <Link to={`/news/${a.slug}`} style={css('display:block; border:1px solid #E1E8F7; background:#fff; border-radius:16px; overflow:hidden; color:inherit; transition:transform .18s, box-shadow .18s;')}>
      <img src={a.image} alt={a.title} style={css('width:100%; height:148px; object-fit:cover; display:block;')} />
      <div style={css('padding:16px 18px 18px;')}>
        <FormatPill a={a} />
        <h3 style={css('font-size:15.5px; font-weight:700; margin:9px 0 8px; color:#16214A; line-height:1.32;')}>{a.title}</h3>
        <span style={css('font-size:12.5px; color:#8B95AD; display:flex; align-items:center; gap:6px; flex-wrap:wrap;')}>{a.read} · Updated {a.date} · <ViewCount a={a} /></span>
      </div>
    </Link>
  )
}
