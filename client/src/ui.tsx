import React, { useState } from 'react'

/**
 * Converts a CSS declaration string ("color:#fff; padding:8px") into a
 * React.CSSProperties object. Lets us port the design file's inline styles
 * almost verbatim while keeping full type-safety at the call sites.
 */
export function css(str: string): React.CSSProperties {
  const out: Record<string, string> = {}
  str.split(';').forEach((decl) => {
    const idx = decl.indexOf(':')
    if (idx === -1) return
    const rawKey = decl.slice(0, idx).trim()
    const val = decl.slice(idx + 1).trim()
    if (!rawKey || !val) return
    // kebab-case -> camelCase, preserving vendor prefixes (-webkit- -> Webkit)
    const key = rawKey.replace(/^-/, '').replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    out[key] = val
  })
  return out as React.CSSProperties
}

type ElProps = {
  as?: keyof JSX.IntrinsicElements
  style?: React.CSSProperties
  hover?: React.CSSProperties
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLElement>, 'style'> &
  Record<string, unknown>

/**
 * A generic element that reproduces the design tool's `style-hover` feature:
 * pass a `hover` style object and it merges on mouse-enter.
 */
export function El({ as = 'div', style, hover, children, ...rest }: ElProps) {
  const [h, setH] = useState(false)
  const Tag = as as any
  return (
    <Tag
      style={{ ...(style || {}), ...(h && hover ? hover : {}) }}
      onMouseEnter={hover ? () => setH(true) : undefined}
      onMouseLeave={hover ? () => setH(false) : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Diagonal-stripe placeholder background used across the design for imagery. */
export const phBase =
  'background:repeating-linear-gradient(135deg,#E6EDFB 0 13px,#F2F6FF 13px 26px); display:flex; align-items:center; justify-content:center;'
export const phDark =
  'background:repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 13px,rgba(255,255,255,.02) 13px 26px); display:flex; align-items:center; justify-content:center;'
export const phLabel =
  'font-family:ui-monospace,Menlo,monospace; font-size:11px; letter-spacing:.02em; color:#98A2C4; background:rgba(255,255,255,.7); padding:4px 10px; border-radius:100px;'
export const eyebrow =
  'color:#2B50E4; font-weight:700; font-size:13px; letter-spacing:.11em; text-transform:uppercase;'
export const h2Style =
  'font-size:34px; font-weight:800; letter-spacing:-.028em; margin:9px 0 0; color:#16214A; line-height:1.1;'

/** Shared placeholder box with a centered mono label. */
export function Placeholder({ style, label, dark }: { style: string; label?: string; dark?: boolean }) {
  return (
    <div style={css((dark ? phDark : phBase) + style)}>
      {label && (
        <span
          style={css(
            dark
              ? 'font-family:ui-monospace,Menlo,monospace; font-size:11px; color:#96A0C6; background:rgba(0,0,0,.25); padding:4px 10px; border-radius:100px;'
              : phLabel,
          )}
        >
          {label}
        </span>
      )}
    </div>
  )
}
