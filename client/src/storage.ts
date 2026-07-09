// localStorage helpers for the quote funnel: in-progress answers (resume) and
// submitted leads. All client-side per the project spec.

export type FunnelAnswers = {
  treatment: string
  whoFor: string
  timing: string
  contactPref: string
}

export type ContactDetails = {
  first: string
  last: string
  email: string
  phone: string
  consent: boolean
}

export type FunnelProgress = {
  step: number
  ans: FunnelAnswers
  f: ContactDetails
  updatedAt: number
}

export type Lead = FunnelAnswers &
  Omit<ContactDetails, 'consent'> & {
    id: string
    submittedAt: number
    source: 'funnel' | 'ai-chat'
  }

const PROGRESS_KEY = 'unwello_funnel_progress'
const LEADS_KEY = 'unwello_leads'

export const emptyAnswers: FunnelAnswers = { treatment: '', whoFor: '', timing: '', contactPref: '' }
export const emptyContact: ContactDetails = { first: '', last: '', email: '', phone: '', consent: false }

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function loadProgress(): FunnelProgress | null {
  const p = safeParse<FunnelProgress | null>(localStorage.getItem(PROGRESS_KEY), null)
  if (!p) return null
  // Ignore stale/empty progress (nothing meaningful answered).
  const hasAnswers = p.ans && (p.ans.treatment || p.ans.whoFor || p.ans.timing || p.ans.contactPref)
  return hasAnswers ? p : null
}

export function saveProgress(p: Omit<FunnelProgress, 'updatedAt'>) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify({ ...p, updatedAt: Date.now() }))
}

export function clearProgress() {
  localStorage.removeItem(PROGRESS_KEY)
}

export function loadLeads(): Lead[] {
  return safeParse<Lead[]>(localStorage.getItem(LEADS_KEY), [])
}

export function saveLead(lead: Lead) {
  const leads = loadLeads()
  leads.push(lead)
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads))
}

export function makeId(): string {
  return 'lead_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
}
