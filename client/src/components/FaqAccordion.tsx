import { useState } from 'react'
import { css } from '../ui'
import type { Faq } from '../content/treatments'

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div style={css('display:flex; flex-direction:column; gap:12px; max-width:820px;')}>
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i} style={css('background:#fff; border:1px solid #E1E8F7; border-radius:16px; overflow:hidden;')}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={css('width:100%; display:flex; align-items:center; justify-content:space-between; gap:16px; padding:18px 20px; background:none; border:none; cursor:pointer; text-align:left; font-family:inherit;')}
            >
              <span style={css('font-weight:700; font-size:15.5px; color:#16214A;')}>{f.q}</span>
              <span style={css('flex:0 0 auto; width:26px; height:26px; border-radius:8px; background:#ECF1FD; color:#2B50E4; display:flex; align-items:center; justify-content:center; font-size:16px; transition:transform .2s; transform:rotate(' + (isOpen ? '45' : '0') + 'deg);')}>+</span>
            </button>
            {isOpen && (
              <p style={css('margin:0; padding:0 20px 20px; font-size:14.5px; line-height:1.65; color:#5A6580; animation:uwFade .2s ease;')}>{f.a}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
