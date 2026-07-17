import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { css, El, eyebrow, h2Style } from '../ui'
import { hospitals, sortRecommended } from '../content/hospitals'
import { categories } from '../content/treatments'
import { useApp } from '../context'
import ClinicCard from '../components/ClinicCard'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { breadcrumbJsonLd } from '../seo'

type SortKey = 'recommended' | 'established' | 'alphabetical'

function jciYearNum(jciSince: string): number {
  const m = jciSince.match(/\d{4}/)
  return m ? parseInt(m[0], 10) : 9999
}

export default function ClinicsListing() {
  const { openFunnel } = useApp()
  const [approvedOnly, setApprovedOnly] = useState(false)
  const [specialty, setSpecialty] = useState<string>('any')
  const [city, setCity] = useState<string>('any')
  const [programType, setProgramType] = useState<string>('any')
  const [accreditation, setAccreditation] = useState<string[]>([])
  const [sort, setSort] = useState<SortKey>('recommended')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const cities = useMemo(() => Array.from(new Set(hospitals.map((h) => h.city))).sort(), [])
  const programTypes = useMemo(() => Array.from(new Set(hospitals.map((h) => h.jciProgramType))).sort(), [])
  const accreditationTags = ['ISO', 'HA', 'GHA']

  const toggle = (arr: string[], setArr: (v: string[]) => void, val: string) =>
    setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val])

  const filtered = useMemo(() => {
    let list = hospitals.filter((h) => {
      if (approvedOnly && !h.approved) return false
      if (specialty !== 'any' && !h.specialties.includes(specialty)) return false
      if (city !== 'any' && h.city !== city) return false
      if (programType !== 'any' && h.jciProgramType !== programType) return false
      if (accreditation.length && !accreditation.every((a) => h.otherAccreditations.some((oa) => oa.toUpperCase().includes(a)))) return false
      return true
    })

    if (sort === 'established') list = [...list].sort((a, b) => jciYearNum(a.jciSince) - jciYearNum(b.jciSince))
    else if (sort === 'alphabetical') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    else list = sortRecommended(list)

    return list
  }, [approvedOnly, specialty, city, programType, accreditation, sort])

  const clearFilters = () => {
    setApprovedOnly(false); setSpecialty('any'); setCity('any'); setProgramType('any'); setAccreditation([])
  }

  const selectStyle = 'width:100%; padding:11px 12px; border:1px solid #E1E8F7; border-radius:11px; font-size:14px; background:#fff; color:#16214A; font-family:inherit;'
  const filterLabel = 'font-size:12.5px; font-weight:700; color:#16214A; text-transform:uppercase; letter-spacing:.04em; margin-bottom:8px; display:block;'
  const checkRow = 'display:flex; align-items:center; gap:9px; font-size:14px; color:#3A4468; padding:6px 0; cursor:pointer;'

  const FiltersPanel = (
    <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:22px; display:flex; flex-direction:column; gap:20px;')}>
      <div style={css('display:flex; align-items:center; justify-content:space-between;')}>
        <span style={css('font-weight:800; font-size:15px; color:#16214A;')}>Filters</span>
        <button onClick={clearFilters} style={css('background:none; border:none; color:#2B50E4; font-size:13px; font-weight:700; cursor:pointer; font-family:inherit;')}>Clear all</button>
      </div>

      <label style={css(checkRow)}>
        <input type="checkbox" checked={approvedOnly} onChange={(e) => setApprovedOnly(e.target.checked)} style={css('width:16px; height:16px; accent-color:#2B50E4;')} />
        <strong>Hospigo Approved only</strong>
      </label>

      <div>
        <label style={css(filterLabel)}>Specialty</label>
        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)} style={css(selectStyle)}>
          <option value="any">All specialties</option>
          {categories.map((c) => <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>)}
        </select>
      </div>

      <div>
        <label style={css(filterLabel)}>City / region</label>
        <select value={city} onChange={(e) => setCity(e.target.value)} style={css(selectStyle)}>
          <option value="any">All cities</option>
          {cities.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label style={css(filterLabel)}>Facility type</label>
        <select value={programType} onChange={(e) => setProgramType(e.target.value)} style={css(selectStyle)}>
          <option value="any">All facility types</option>
          {programTypes.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div>
        <label style={css(filterLabel)}>Additional accreditation</label>
        {accreditationTags.map((a) => (
          <label key={a} style={css(checkRow)}>
            <input type="checkbox" checked={accreditation.includes(a)} onChange={() => toggle(accreditation, setAccreditation, a)} style={css('width:16px; height:16px; accent-color:#2B50E4;')} />
            {a}
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <section style={css('max-width:1240px; margin:0 auto; padding:40px 32px 64px;')}>
      <Seo
        title="JCI-Accredited Hospitals & Clinics in Thailand | Hospigo"
        description="Browse JCI-accredited hospitals and clinics across Thailand. Filter by specialty, city and accreditation — get matched with a free, personalized quote."
        path="/clinics"
      />
      <JsonLd id="breadcrumb" data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Clinics', path: '/clinics' }])} />
      <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:18px;')}>
        <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
        <span>›</span>
        <span style={css('color:#16214A; font-weight:600;')}>Clinics</span>
      </div>
      <span style={css(eyebrow)}>JCI-accredited facilities</span>
      <h1 style={css(h2Style + ' margin-bottom:8px;')}>Browse all hospitals & clinics</h1>
      <p style={css('font-size:15.5px; color:#7A85A0; margin:0 0 26px; max-width:720px;')}>
        Every facility below holds JCI accreditation. "Hospigo Approved" facilities have been personally vetted by our team and are shown first — the rest is Thailand's full JCI-accredited directory, so you can see the whole landscape.
      </p>

      <button
        onClick={() => setFiltersOpen((o) => !o)}
        className="uw-show-mobile"
        style={css('align-items:center; gap:8px; background:#fff; border:1px solid #E1E8F7; padding:11px 16px; border-radius:12px; font-weight:700; font-size:14px; color:#16214A; margin-bottom:16px; cursor:pointer; font-family:inherit;')}
      >
        ⚙️ Filters {filtersOpen ? '▲' : '▼'}
      </button>

      <div className="uw-clinics-layout" style={css('display:grid; grid-template-columns:260px 1fr; gap:28px; align-items:start;')}>
        <div className="uw-hide-mobile" style={css('position:sticky; top:90px;')}>{FiltersPanel}</div>
        {filtersOpen && <div className="uw-show-mobile" style={css('display:flex;')}>{FiltersPanel}</div>}

        <div>
          <div style={css('display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:18px; flex-wrap:wrap;')}>
            <span style={css('font-size:14px; color:#7A85A0; font-weight:600;')}>{filtered.length} facilit{filtered.length === 1 ? 'y' : 'ies'} found</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} style={css('padding:9px 12px; border:1px solid #E1E8F7; border-radius:10px; font-size:13.5px; color:#16214A; background:#fff; font-family:inherit;')}>
              <option value="recommended">Sort: Recommended</option>
              <option value="established">Sort: Most established</option>
              <option value="alphabetical">Sort: A–Z</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:48px 32px; text-align:center;')}>
              <div style={css('font-size:32px; margin-bottom:12px;')}>🔍</div>
              <h3 style={css('font-size:19px; font-weight:800; color:#16214A; margin:0 0 8px;')}>No exact match</h3>
              <p style={css('font-size:14.5px; color:#7A85A0; margin:0 0 20px; max-width:380px; margin-left:auto; margin-right:auto;')}>Tell us what you need and your coordinator will find the right facility for you — no need to filter it yourself.</p>
              <El as="button" onClick={() => openFunnel()} style={css('background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:13px 26px; border-radius:12px; font-weight:700; font-size:14.5px; cursor:pointer;')} hover={css('background:#1B3AB8;')}>Get my free quote</El>
            </div>
          ) : (
            <div className="uw-grid-2" style={css('display:grid; grid-template-columns:1fr 1fr; gap:18px;')}>
              {filtered.map((h) => (
                <ClinicCard key={h.slug} h={h} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
