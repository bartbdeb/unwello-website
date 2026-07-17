import { Link, useParams } from 'react-router-dom'
import { css, El, Placeholder, eyebrow, h2Style } from '../ui'
import { patientStories, storyBySlug } from '../content/stories'
import { categoryBySlug } from '../content/treatments'
import { useApp } from '../context'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { breadcrumbJsonLd, truncate } from '../seo'

export default function StoryDetail() {
  const { slug = '' } = useParams()
  const { openFunnel } = useApp()
  const story = storyBySlug(slug)

  if (!story) {
    return (
      <section style={css('max-width:820px; margin:0 auto; padding:100px 32px; text-align:center;')}>
        <h1 style={css('font-size:32px; font-weight:800; color:#16214A;')}>Story not found</h1>
        <p style={css('font-size:16px; color:#5A6580; margin:12px 0 24px;')}>We couldn't find that patient story.</p>
        <Link to="/stories" style={css('color:#2B50E4; font-weight:700;')}>← Back to all stories</Link>
      </section>
    )
  }

  const cat = categoryBySlug(story.categorySlug)
  const relatedStories = patientStories.filter((s) => s.categorySlug === story.categorySlug && s.slug !== story.slug).slice(0, 3)

  return (
    <>
      <Seo title={`${story.name}'s ${story.procedure} Story | Hospigo`} description={truncate(story.summary, 158)} path={`/stories/${story.slug}`} />
      <JsonLd
        id="breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Stories', path: '/stories' },
          { name: `${story.name}'s story`, path: `/stories/${story.slug}` },
        ])}
      />
      {/* ---- Breadcrumb + hero ---- */}
      <section style={css('background:linear-gradient(180deg,#E4EDFF 0px,#F4F7FF 400px);')}>
        <div style={css('max-width:1240px; margin:0 auto; padding:32px 32px 48px;')}>
          <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:22px; flex-wrap:wrap;')}>
            <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
            <span>›</span>
            <Link to="/stories" style={css('color:#8B95AD;')}>Stories</Link>
            <span>›</span>
            <span style={css('color:#16214A; font-weight:600;')}>{story.name}'s story</span>
          </div>

          <div className="uw-hero" style={css('display:grid; grid-template-columns:1.15fr .85fr; gap:48px; align-items:center;')}>
            <div>
              {cat && (
                <div style={css('display:inline-flex; align-items:center; gap:9px; background:#fff; border:1px solid #E1E8F7; padding:6px 14px 6px 7px; border-radius:100px; font-size:13px; font-weight:600; color:#3A4468; margin-bottom:18px;')}>
                  <span style={css('font-size:16px;')}>{cat.icon}</span>
                  {cat.name}
                </div>
              )}
              <h1 style={css('font-size:42px; line-height:1.08; letter-spacing:-.028em; font-weight:800; margin:0 0 16px; color:#16214A;')}>{story.name}'s story: {story.procedure}</h1>
              <p style={css('font-size:17px; line-height:1.6; color:#5A6580; margin:0 0 20px; max-width:520px;')}>{story.summary}</p>
              <div style={css('display:flex; align-items:center; gap:11px;')}>
                <Placeholder style="width:40px; height:40px; border-radius:50%; flex:0 0 auto;" />
                <div style={css('display:flex; flex-direction:column;')}>
                  <span style={css('font-size:14px; font-weight:700; color:#16214A;')}>{story.name} {story.flag}</span>
                  <span style={css('font-size:12.5px; color:#8B95AD;')}>{story.country}</span>
                </div>
              </div>
            </div>
            <div className="uw-hide-mobile" style={css('position:relative;')}>
              <Placeholder style="aspect-ratio:4/3; border-radius:22px;" label={story.imgLabel} />
              <span style={css('position:absolute; inset:0; display:flex; align-items:center; justify-content:center;')}>
                <span style={css('width:60px; height:60px; border-radius:50%; background:rgba(255,255,255,.92); display:flex; align-items:center; justify-content:center; color:#16214A; font-size:20px; padding-left:4px; box-shadow:0 10px 24px rgba(0,0,0,.2);')}>▶</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Full story ---- */}
      <section style={css('max-width:1240px; margin:0 auto; padding:48px 32px;')}>
        <div className="uw-savings" style={css('display:grid; grid-template-columns:1.6fr 1fr; gap:48px; align-items:start;')}>
          <div style={css('max-width:720px;')}>
            <div style={css('border-left:4px solid #2B50E4; padding:4px 0 4px 20px; margin-bottom:32px;')}>
              <p style={css('font-size:20px; line-height:1.5; margin:0; color:#16214A; font-weight:600; font-style:italic;')}>“{story.quote}”</p>
            </div>
            {story.body.map((p, i) => (
              <p key={i} style={css('font-size:16px; line-height:1.75; color:#3A4468; margin:0 0 20px;')}>{p}</p>
            ))}
          </div>

          <div style={css('display:flex; flex-direction:column; gap:16px;')}>
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:22px;')}>
              <span style={css('font-size:11.5px; font-weight:800; color:#2B50E4; letter-spacing:.06em; text-transform:uppercase;')}>Treatment summary</span>
              <p style={css('font-size:14.5px; line-height:1.6; color:#3A4468; margin:10px 0 0;')}>{story.results}</p>
            </div>
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:22px;')}>
              <span style={css('font-size:11.5px; font-weight:800; color:#2B50E4; letter-spacing:.06em; text-transform:uppercase;')}>Treated at</span>
              <p style={css('font-size:15px; font-weight:700; color:#16214A; margin:10px 0 0;')}>{story.treatedAt}</p>
              {cat && <Link to={`/treatments/${cat.slug}`} style={css('display:inline-block; margin-top:10px; font-size:13.5px; font-weight:700; color:#2B50E4;')}>See {cat.name.toLowerCase()} facilities →</Link>}
            </div>
            <El as="button" onClick={() => openFunnel(cat?.name)} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:15px; border-radius:13px; font-weight:800; font-size:15px; cursor:pointer; box-shadow:0 8px 20px rgba(43,80,228,.24);')} hover={css('background:#1B3AB8;')}>
              Get a free quote for {cat?.name.toLowerCase() ?? 'this treatment'}
            </El>
          </div>
        </div>
      </section>

      {/* ---- Related stories ---- */}
      {relatedStories.length > 0 && (
        <section style={css('background:#E9F0FF;')}>
          <div style={css('max-width:1240px; margin:0 auto; padding:48px 32px;')}>
            <span style={css(eyebrow)}>More stories</span>
            <h2 style={css(h2Style + ' margin-bottom:24px;')}>Other {cat?.name.toLowerCase()} journeys</h2>
            <div className="uw-grid-3" style={css('display:grid; grid-template-columns:repeat(3,1fr); gap:18px;')}>
              {relatedStories.map((s) => (
                <Link key={s.slug} to={`/stories/${s.slug}`} style={css('display:block; background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:20px; color:inherit;')}>
                  <p style={css('font-size:14.5px; line-height:1.55; margin:0 0 14px; color:#3A4468; font-weight:500;')}>“{s.quote}”</p>
                  <div style={css('font-size:13.5px; font-weight:700; color:#16214A;')}>{s.name} {s.flag}</div>
                  <div style={css('font-size:12.5px; color:#8B95AD;')}>{s.procedure}</div>
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
            <h2 style={css('font-size:28px; font-weight:800; letter-spacing:-.02em; margin:0 0 8px; max-width:520px;')}>Ready to write your own story?</h2>
            <p style={css('font-size:15px; color:#D3DEFF; margin:0; max-width:480px;')}>Get a free, no-obligation quote and a coordinator who plans everything around your trip.</p>
          </div>
          <El as="button" onClick={() => openFunnel()} style={css('background:#fff; color:#2B50E4; border:none; padding:15px 30px; border-radius:13px; font-weight:800; font-size:15px; cursor:pointer; white-space:nowrap; box-shadow:0 10px 24px rgba(0,0,0,.16);')} hover={css('background:#EAF0FF;')}>Get your free quote</El>
        </div>
      </section>
    </>
  )
}
