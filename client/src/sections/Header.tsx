import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { css, El } from '../ui'
import { PHONE_DISPLAY } from '../data'
import { megaMenuItems } from '../content/treatments'
import { useApp } from '../context'

const navBtn = 'background:none; border:none; font-family:inherit; font-size:14.5px; font-weight:500; color:#16214A; padding:9px 14px; border-radius:10px; cursor:pointer; display:flex; align-items:center;'
const navLink = 'color:#16214A; padding:9px 14px; border-radius:10px; font-weight:500;'
const mobileNavLink = 'color:#16214A; padding:15px 4px; font-weight:700; font-size:17px; border-bottom:1px solid #ECF1FD; display:block;'

export default function Header() {
  const { openFunnel } = useApp()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const headerStyle =
    'position:sticky; top:0; z-index:50; background:' +
    (scrolled ? 'rgba(244,247,255,.9)' : '#F4F7FF') +
    '; backdrop-filter:blur(10px); border-bottom:1px solid ' +
    (scrolled ? '#E1E8F7' : 'transparent') +
    '; transition:border-color .2s, background .2s;'

  const openMega = () => {
    window.clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 120)
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileTreatmentsOpen(false)
  }

  return (
    <>
    <header style={css(headerStyle)}>
      <div style={css('max-width:1240px; margin:0 auto; padding:0 32px; height:74px; display:flex; align-items:center; justify-content:space-between; gap:24px;')}>
        <Link to="/" onClick={closeMobileMenu} style={css('display:flex; align-items:center; gap:11px; color:#16214A;')}>
          <span style={css('width:34px; height:34px; border-radius:11px; background:linear-gradient(150deg,#2B50E4,#1B3AB8); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(43,80,228,.28);')}>
            <span style={css('width:15px; height:15px; border-radius:5px; background:#5B84FF; display:block;')} />
          </span>
          <span style={css('font-weight:800; font-size:22px; letter-spacing:-.02em;')}>Unwello</span>
        </Link>

        <nav className="uw-hide-mobile" style={css('display:flex; align-items:center; gap:4px; font-size:14.5px; font-weight:500;')}>
          <div style={css('position:relative;')} onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button onClick={() => setMegaOpen((o) => !o)} style={css(navBtn)}>
              Treatments
              <span style={css('display:inline-block; width:6px; height:6px; border-right:2px solid #8B95AD; border-bottom:2px solid #8B95AD; transform:rotate(45deg) translateY(-2px); margin-left:6px;')} />
            </button>
            {megaOpen && (
              <div style={css('position:absolute; top:calc(100% + 10px); left:-20px; width:600px; max-width:calc(100vw - 64px); background:#FFFFFF; border:1px solid #E1E8F7; border-radius:18px; box-shadow:0 24px 60px rgba(35,51,47,.16); padding:20px; animation:uwFade .16s ease;')}>
                <div style={css('display:grid; grid-template-columns:1fr 1fr; gap:6px;')}>
                  {megaMenuItems.map((m) => (
                    <El
                      as="button"
                      key={m.name}
                      onClick={() => {
                        setMegaOpen(false)
                        if (m.builtSlug) navigate(`/treatments/${m.builtSlug}`)
                        else openFunnel(m.name)
                      }}
                      style={css('display:flex; align-items:center; gap:13px; padding:11px 12px; border:none; background:transparent; border-radius:12px; cursor:pointer; text-align:left; transition:background .15s;')}
                      hover={css('background:#F2F6FF;')}
                    >
                      <span style={css('width:38px; height:38px; border-radius:10px; background:#ECF1FD; display:flex; align-items:center; justify-content:center; font-size:19px; flex:0 0 auto;')}>{m.icon}</span>
                      <span style={css('font-weight:700; font-size:13.5px; color:#16214A; line-height:1.3;')}>{m.name}</span>
                    </El>
                  ))}
                </div>
                <div style={css('border-top:1px solid #ECF1FD; margin-top:12px; padding-top:12px;')}>
                  <El
                    as="button"
                    onClick={() => { setMegaOpen(false); navigate('/treatments') }}
                    style={css('width:100%; display:flex; align-items:center; justify-content:center; gap:8px; padding:12px; border:none; background:#F2F6FF; border-radius:12px; cursor:pointer; font-weight:700; font-size:14px; color:#2B50E4;')}
                    hover={css('background:#E7ECFF;')}
                  >
                    Browse all treatments →
                  </El>
                </div>
              </div>
            )}
          </div>
          <Link to="/clinics" style={css(navLink)}>Clinics</Link>
          <Link to="/how-it-works" style={css(navLink)}>How It Works</Link>
          <Link to="/stories" style={css(navLink)}>Stories</Link>
          <Link to="/news" style={css(navLink)}>News</Link>
        </nav>

        <div style={css('display:flex; align-items:center; gap:16px;')}>
          <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="uw-hide-mobile" style={css('display:flex; align-items:center; gap:7px; font-size:14px; font-weight:600; color:#16214A;')}>
            <span style={css('width:30px; height:30px; border-radius:9px; background:#ECF1FD; display:flex; align-items:center; justify-content:center;')}>📞</span>
            <span style={css('white-space:nowrap;')}>{PHONE_DISPLAY}</span>
          </a>
          <El
            as="button"
            onClick={() => openFunnel()}
            className="uw-hide-mobile"
            style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:12px 22px; border-radius:12px; font-weight:700; font-size:14.5px; cursor:pointer; box-shadow:0 6px 16px rgba(43,80,228,.28); transition:transform .15s, box-shadow .15s;')}
            hover={css('transform:translateY(-1px); box-shadow:0 10px 22px rgba(43,80,228,.34);')}
          >
            Get Free Quote
          </El>

          {/* Mobile/tablet-portrait hamburger — the only way to reach nav links below 900px */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="uw-show-mobile"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={css('display:none; width:42px; height:42px; border-radius:11px; border:1px solid #E1E8F7; background:#fff; cursor:pointer; align-items:center; justify-content:center; flex-direction:column; gap:4px; flex:0 0 auto;')}
          >
            <span style={css('width:18px; height:2px; background:#16214A; border-radius:2px; transition:transform .2s; transform:' + (mobileOpen ? 'translateY(6px) rotate(45deg)' : 'none') + ';')} />
            <span style={css('width:18px; height:2px; background:#16214A; border-radius:2px; transition:opacity .2s; opacity:' + (mobileOpen ? '0' : '1') + ';')} />
            <span style={css('width:18px; height:2px; background:#16214A; border-radius:2px; transition:transform .2s; transform:' + (mobileOpen ? 'translateY(-6px) rotate(-45deg)' : 'none') + ';')} />
          </button>
        </div>
      </div>
    </header>

    {/* Full-screen mobile nav panel — rendered as a header SIBLING, not a
        child: <header> has backdrop-filter for the frosted-glass scroll
        effect, and backdrop-filter (like transform/filter/perspective)
        creates a new containing block for position:fixed descendants. Left
        nested, this panel's "inset" would resolve against the 74px-tall
        header box instead of the viewport, collapsing it to a sliver
        instead of covering the screen. */}
    {mobileOpen && (
        <div className="uw-show-mobile" style={css('position:fixed; inset:74px 0 0 0; background:#F4F7FF; z-index:49; overflow-y:auto; padding:8px 24px 32px; animation:uwFade .18s ease; flex-direction:column;')}>
          <button
            onClick={() => setMobileTreatmentsOpen((o) => !o)}
            style={css('width:100%; display:flex; align-items:center; justify-content:space-between; background:none; border:none; font-family:inherit; ' + mobileNavLink)}
          >
            Treatments
            <span style={css('display:inline-block; width:8px; height:8px; border-right:2px solid #8B95AD; border-bottom:2px solid #8B95AD; transition:transform .2s; transform:rotate(' + (mobileTreatmentsOpen ? '-135deg' : '45deg') + ');')} />
          </button>
          {mobileTreatmentsOpen && (
            <div style={css('display:flex; flex-direction:column; padding:4px 0 12px 12px; gap:2px;')}>
              {megaMenuItems.map((m) => (
                <button
                  key={m.name}
                  onClick={() => {
                    closeMobileMenu()
                    if (m.builtSlug) navigate(`/treatments/${m.builtSlug}`)
                    else openFunnel(m.name)
                  }}
                  style={css('display:flex; align-items:center; gap:11px; padding:11px 4px; border:none; background:none; font-family:inherit; text-align:left; font-weight:600; font-size:15px; color:#3A4468;')}
                >
                  <span style={css('font-size:17px;')}>{m.icon}</span>
                  {m.name}
                </button>
              ))}
              <Link to="/treatments" onClick={closeMobileMenu} style={css('padding:11px 4px; font-weight:700; font-size:14.5px; color:#2B50E4;')}>Browse all treatments →</Link>
            </div>
          )}
          <Link to="/clinics" onClick={closeMobileMenu} style={css(mobileNavLink)}>Clinics</Link>
          <Link to="/how-it-works" onClick={closeMobileMenu} style={css(mobileNavLink)}>How It Works</Link>
          <Link to="/stories" onClick={closeMobileMenu} style={css(mobileNavLink)}>Stories</Link>
          <Link to="/news" onClick={closeMobileMenu} style={css(mobileNavLink + ' border-bottom:none;')}>News</Link>

          <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} style={css('display:flex; align-items:center; gap:10px; margin-top:20px; font-size:15px; font-weight:700; color:#16214A;')}>
            <span style={css('width:34px; height:34px; border-radius:10px; background:#ECF1FD; display:flex; align-items:center; justify-content:center;')}>📞</span>
            {PHONE_DISPLAY}
          </a>
          <El
            as="button"
            onClick={() => { closeMobileMenu(); openFunnel() }}
            style={css('margin-top:16px; width:100%; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:15px; border-radius:13px; font-weight:800; font-size:16px; cursor:pointer;')}
          >
            Get Free Quote
          </El>
        </div>
      )}
    </>
  )
}
