import { createContext, useContext } from 'react'

export type HospigoCtx = {
  /** Open the quote funnel. Optionally pre-select a treatment (jumps to step 2). */
  openFunnel: (treatment?: string) => void
}

export const AppContext = createContext<HospigoCtx>({ openFunnel: () => {} })
export const useApp = () => useContext(AppContext)
