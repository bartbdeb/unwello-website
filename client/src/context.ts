import { createContext, useContext } from 'react'

export type UnwelloCtx = {
  /** Open the quote funnel. Optionally pre-select a treatment (jumps to step 2). */
  openFunnel: (treatment?: string) => void
}

export const AppContext = createContext<UnwelloCtx>({ openFunnel: () => {} })
export const useApp = () => useContext(AppContext)
