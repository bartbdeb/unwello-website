import { useNavigate } from 'react-router-dom'
import { css, El, phBase } from '../ui'
import type { Hospital } from '../content/hospitals'
import { categoryBySlug } from '../content/treatments'
import { useApp } from '../context'

function jciYear(jciSince: string): string {
  const m = jciSince.match(/\d{4}/)
  return m ? m[0] : jciSince
}

// Accreditation-forward card for real, named facilities — no fabricated
// rating, review count, doctor name, or price is shown (see content/hospitals.ts).
export default function ClinicCard({ h }: { h: Hospital }) {
  const { openFunnel } = useApp()
  const navigate = useNavigate()
  const preferredTreatment = h.specialties[0] ? categoryBySlug(h.specialties[0])?.name : undefined

  return (
    <div style={css('border:1px solid #E1E8F7; background:#FFFFFF; border-radius:20px; overflow:hidden; box-shadow:0 8px 22px rgba(35,51,47,.05);')}>
      <div style={css((h.imageFile ? '' : phBase) + 'height:150px; position:relative; overflow:hidden;')}>
        {h.imageFile ? (
          <img src={h.imageFile} alt={h.name} style={css('width:100%; height:100%; object-fit:cover; display:block;')} />
        ) : (
          <span style={css('font-family:ui-monospace,Menlo,monospace; font-size:11px; color:#98A2C4; background:rgba(255,255,255,.7); padding:4px 10px; border-radius:100px;')}>{h.jciProgramType.toLowerCase()}</span>
        )}
        <div style={css('position:absolute; top:12px; left:12px; display:flex; gap:6px; flex-wrap:wrap; max-width:calc(100% - 24px);')}>
          {h.approved && (
            <span style={css('background:#2E8B57; color:#fff; border-radius:8px; padding:4px 9px; font-size:11px; font-weight:800; letter-spacing:.02em;')}>✓ Hospigo Approved</span>
          )}
          <span style={css('background:rgba(255,255,255,.94); border-radius:8px; padding:4px 9px; font-size:11px; font-weight:800; color:#2B50E4; letter-spacing:.02em;')}>JCI</span>
        </div>
      </div>
      <div style={css('padding:17px 18px 18px;')}>
        <span style={css('font-weight:800; font-size:16.5px; color:#16214A; display:block; margin-bottom:3px;')}>{h.name}</span>
        <div style={css('font-size:13px; color:#8B95AD; margin-bottom:10px;')}>📍 {h.city} · JCI accredited since {jciYear(h.jciSince)}</div>
        <div style={css('display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px; max-height:82px; overflow:hidden;')}>
          {h.specialties.length > 0 ? (
            h.specialties.slice(0, 7).map((s) => (
              <span key={s} style={css('background:#ECF1FD; color:#2B50E4; font-size:11.5px; font-weight:700; padding:4px 9px; border-radius:7px;')}>{categoryBySlug(s)?.name ?? s}</span>
            ))
          ) : (
            <span style={css('font-size:12.5px; color:#7A85A0;')}>{h.allCategoriesRaw.join(', ')}</span>
          )}
        </div>
        <div style={css('display:flex; gap:9px;')}>
          <El as="button" onClick={() => openFunnel(preferredTreatment)} style={css('flex:1; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border:none; padding:11px; border-radius:11px; font-weight:700; font-size:13.5px; cursor:pointer;')} hover={css('background:#1B3AB8;')}>Get Quote</El>
          <El as="button" onClick={() => navigate(`/clinics/${h.slug}`)} style={css('flex:1; background:#FFFFFF; color:#16214A; border:1px solid #E1E8F7; padding:11px; border-radius:11px; font-weight:700; font-size:13.5px; cursor:pointer;')} hover={css('background:#F2F6FF;')}>View Clinic</El>
        </div>
      </div>
    </div>
  )
}
