import { useCallback, useEffect, useState } from 'react'
import {
  emptyAnswers, emptyContact, loadProgress, saveProgress, clearProgress,
  saveLead, makeId, type FunnelAnswers, type ContactDetails,
} from './storage'
import { WHATSAPP_NUMBER } from './data'
import { API_BASE } from './apiBase'

const TOTAL_QUESTION_STEPS = 5 // steps 1..5; step 6 = success
const SUCCESS_STEP = 6

export type FunnelState = ReturnType<typeof useFunnel>

export function useFunnel() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [ans, setAns] = useState<FunnelAnswers>(emptyAnswers)
  const [f, setF] = useState<ContactDetails>(emptyContact)
  const [formError, setFormError] = useState('')
  const [hasSavedProgress, setHasSavedProgress] = useState(false)

  // On mount, detect resumable progress (for the "continue" banner).
  useEffect(() => {
    setHasSavedProgress(!!loadProgress())
  }, [])

  // Persist progress whenever the user is mid-funnel (not on success screen).
  useEffect(() => {
    if (open && step < SUCCESS_STEP) {
      saveProgress({ step, ans, f })
      setHasSavedProgress(true)
    }
  }, [open, step, ans, f])

  const openFunnel = useCallback((treatment?: string) => {
    setFormError('')
    if (treatment) {
      setAns((a) => ({ ...a, treatment }))
      setStep(2)
    } else {
      setStep(1)
    }
    setOpen(true)
  }, [])

  const resumeFunnel = useCallback(() => {
    const p = loadProgress()
    if (p) {
      setAns(p.ans)
      setF(p.f)
      setStep(p.step)
    }
    setOpen(true)
  }, [])

  const closeFunnel = useCallback(() => setOpen(false), [])

  const goBack = useCallback(() => {
    setFormError('')
    setStep((s) => Math.max(1, s - 1))
  }, [])

  const select = useCallback((field: keyof FunnelAnswers, value: string) => {
    setAns((a) => ({ ...a, [field]: value }))
    setStep((s) => s + 1)
  }, [])

  const setContact = useCallback((patch: Partial<ContactDetails>) => {
    setF((prev) => ({ ...prev, ...patch }))
  }, [])

  const submit = useCallback(() => {
    if (!f.first.trim()) return setFormError('Please enter your first name.')
    if (!/.+@.+\..+/.test(f.email)) return setFormError('Please enter a valid email address.')
    if (!f.consent) return setFormError('Please accept the consent notice to continue.')
    setFormError('')

    // Save the lead locally (a local log only — see the fetch below for the
    // actual delivery to the team), clear in-progress state.
    saveLead({
      id: makeId(),
      submittedAt: Date.now(),
      source: 'funnel',
      ...ans,
      first: f.first,
      last: f.last,
      email: f.email,
      phone: f.phone,
    })
    clearProgress()
    setHasSavedProgress(false)
    setStep(SUCCESS_STEP)

    // Delivers the inquiry to the team via email (server-side). Fire-and-
    // forget: a network hiccup here shouldn't strand the user on a broken
    // success screen — the local copy above still exists as a fallback.
    fetch(`${API_BASE}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...ans, first: f.first, last: f.last, email: f.email, phone: f.phone, source: 'funnel' }),
    }).catch((err) => console.error('[leads] failed to notify team:', err))

    // WhatsApp handoff: if the user chose WhatsApp, open a pre-filled chat.
    if (ans.contactPref === 'WhatsApp') {
      const msg = `Hi Hospigo! I'm ${f.first}. I just requested a quote for ${ans.treatment || 'treatment'} in Thailand (${ans.timing || 'timing flexible'}).`
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
      window.setTimeout(() => window.open(url, '_blank'), 400)
    }
  }, [ans, f])

  const dismissResume = useCallback(() => {
    clearProgress()
    setHasSavedProgress(false)
  }, [])

  const progressPct = Math.min(100, Math.round((Math.min(step, SUCCESS_STEP) / (TOTAL_QUESTION_STEPS + 1)) * 100)) + '%'

  return {
    open, step, ans, f, formError, progressPct, hasSavedProgress,
    openFunnel, resumeFunnel, closeFunnel, goBack, select, setContact, submit, dismissResume,
    isSuccess: step === SUCCESS_STEP,
    showBack: step > 1 && step < SUCCESS_STEP,
  }
}
