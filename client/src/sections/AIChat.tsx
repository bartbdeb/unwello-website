import { useEffect, useRef, useState } from 'react'
import { css, El } from '../ui'
import { useApp } from '../context'

type Msg = { role: 'user' | 'assistant'; content: string }

const GREETING: Msg = {
  role: 'assistant',
  content:
    "Hi! I'm Unwello's assistant 🌤️ I can help you explore treatments in Thailand, rough costs, and how the process works. What are you considering?",
}

export default function AIChat() {
  const { openFunnel } = useApp()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading, open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return
    const next = [...messages, { role: 'user' as const, content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Don't send the hard-coded greeting to the API.
        body: JSON.stringify({ messages: next.filter((m, i) => !(i === 0 && m === GREETING)) }),
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: 'assistant', content: data.reply ?? "Sorry, I couldn't respond just now." }])
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: "I couldn't reach the assistant service. Is the backend running? You can still get a free quote below." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Launcher buttons (stacked above the WhatsApp float) */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI assistant"
        style={css('position:fixed; bottom:94px; right:26px; width:58px; height:58px; border-radius:50%; background:linear-gradient(150deg,#2B50E4,#1B3AB8); color:#fff; border:none; display:flex; align-items:center; justify-content:center; font-size:24px; box-shadow:0 10px 26px rgba(43,80,228,.4); z-index:41; cursor:pointer;')}
      >
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div style={css('position:fixed; bottom:164px; right:26px; width:380px; max-width:calc(100vw - 40px); height:520px; max-height:calc(100vh - 200px); background:#fff; border:1px solid #E1E8F7; border-radius:20px; box-shadow:0 30px 70px rgba(35,51,47,.28); z-index:41; display:flex; flex-direction:column; overflow:hidden; animation:uwPop .18s ease;')}>
          {/* header */}
          <div style={css('background:linear-gradient(140deg,#1C2E7C 0%,#0F1B4A 100%); color:#fff; padding:16px 18px; display:flex; align-items:center; gap:11px;')}>
            <span style={css('width:36px; height:36px; border-radius:11px; background:rgba(91,132,255,.25); display:flex; align-items:center; justify-content:center; font-size:18px;')}>🤖</span>
            <div style={css('display:flex; flex-direction:column;')}>
              <span style={css('font-weight:800; font-size:15px;')}>Unwello Assistant</span>
              <span style={css('font-size:12px; color:#A6B0D0;')}>AI intake · not medical advice</span>
            </div>
          </div>

          {/* messages */}
          <div ref={scrollRef} style={css('flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:10px; background:#F4F7FF;')}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={css(
                  'max-width:82%; padding:11px 14px; border-radius:14px; font-size:14px; line-height:1.5; white-space:pre-wrap; ' +
                    (m.role === 'user'
                      ? 'align-self:flex-end; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; border-bottom-right-radius:4px;'
                      : 'align-self:flex-start; background:#fff; color:#16214A; border:1px solid #E1E8F7; border-bottom-left-radius:4px;'),
                )}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div style={css('align-self:flex-start; background:#fff; border:1px solid #E1E8F7; border-radius:14px; padding:12px 14px; display:flex; gap:5px;')}>
                {[0, 1, 2].map((n) => (
                  <span key={n} style={css('width:7px; height:7px; border-radius:50%; background:#B7C0DE; animation:uwBlink 1s infinite; animation-delay:' + n * 0.15 + 's;')} />
                ))}
              </div>
            )}
          </div>

          {/* quote CTA */}
          <button
            onClick={() => { setOpen(false); openFunnel() }}
            style={css('margin:0 12px; padding:10px; background:#E7ECFF; color:#2B50E4; border:none; border-radius:11px; font-weight:700; font-size:13.5px; cursor:pointer; font-family:inherit;')}
          >
            ✨ Start my free quote
          </button>

          {/* input */}
          <div style={css('padding:12px; display:flex; gap:8px; align-items:center;')}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') send() }}
              placeholder="Ask about treatments, costs…"
              style={css('flex:1; padding:12px 14px; border:1px solid #E1E8F7; border-radius:12px; font-size:14px; outline:none; color:#16214A;')}
            />
            <button
              onClick={send}
              disabled={loading}
              style={css('width:44px; height:44px; border-radius:12px; border:none; background:linear-gradient(160deg,#3A63FF 0%,#2540D8 100%); color:#fff; font-size:17px; cursor:pointer; flex:0 0 auto;')}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}
