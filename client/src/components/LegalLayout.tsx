import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { css, eyebrow, h2Style } from '../ui'
import Seo from './Seo'
import JsonLd from './JsonLd'
import { breadcrumbJsonLd } from '../seo'

type Props = {
  title: string
  lastUpdated: string
  description: string
  path: string
  children: ReactNode
}

// Shared shell for the legal pages (Privacy, Terms, Medical Disclaimer,
// Cookie Policy) — same masthead treatment, just different body content.
export default function LegalLayout({ title, lastUpdated, description, path, children }: Props) {
  return (
    <section style={css('max-width:820px; margin:0 auto; padding:48px 32px 80px;')}>
      <Seo title={`${title} | Hospigo`} description={description} path={path} />
      <JsonLd id="breadcrumb" data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: title, path }])} />
      <div style={css('display:flex; align-items:center; gap:8px; font-size:13px; color:#8B95AD; margin-bottom:18px;')}>
        <Link to="/" style={css('color:#8B95AD;')}>Home</Link>
        <span>›</span>
        <span style={css('color:#16214A; font-weight:600;')}>{title}</span>
      </div>
      <span style={css(eyebrow)}>Legal</span>
      <h1 style={css(h2Style + ' font-size:36px; margin-bottom:8px;')}>{title}</h1>
      <p style={css('font-size:13.5px; color:#8B95AD; margin:0 0 32px;')}>Last updated: {lastUpdated}</p>
      <div style={css('font-size:15.5px; line-height:1.75; color:#3A4468;')}>{children}</div>
    </section>
  )
}

export const legalH2 = 'font-size:21px; font-weight:800; color:#16214A; margin:32px 0 12px;'
export const legalUl = 'margin:0 0 16px; padding-left:20px; line-height:1.75;'
export const legalCallout = 'background:#FFF7E6; border:1px solid #F0DDA8; border-radius:14px; padding:16px 18px; margin:16px 0; font-size:14px; color:#7A5C10;'
