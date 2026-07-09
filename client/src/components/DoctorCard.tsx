import { css, Placeholder } from '../ui'

// Not currently used — no real per-doctor data exists yet (the JCI hospital
// database has facility-level info only). Kept for the future Doctor Profile
// page (spec B7) once real doctor records are sourced.
export type Doctor = {
  name: string
  title: string
  specialty: string
  yearsExperience: number
  proceduresCount: number
  languages: string[]
}

export default function DoctorCard({ d }: { d: Doctor }) {
  return (
    <div style={css('background:#fff; border:1px solid #E1E8F7; border-radius:18px; padding:20px; display:flex; gap:14px;')}>
      <Placeholder style="width:56px; height:56px; border-radius:50%; flex:0 0 auto;" />
      <div>
        <div style={css('font-weight:800; font-size:15.5px; color:#16214A;')}>{d.name}</div>
        <div style={css('font-size:13px; color:#2B50E4; font-weight:600; margin-top:1px;')}>{d.title}</div>
        <div style={css('font-size:13px; color:#7A85A0; margin-top:4px;')}>{d.specialty}</div>
        <div style={css('font-size:12.5px; color:#8B95AD; margin-top:6px;')}>{d.yearsExperience} yrs experience · {d.proceduresCount.toLocaleString('en-US')}+ procedures</div>
        <div style={css('display:flex; gap:6px; margin-top:8px; flex-wrap:wrap;')}>
          {d.languages.map((l) => (
            <span key={l} style={css('background:#ECF1FD; color:#2B50E4; font-size:11px; font-weight:700; padding:3px 8px; border-radius:7px;')}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
