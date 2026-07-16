# Hospigo

Thailand medical tourism platform. React + TypeScript frontend, small Express backend for AI (keeps API keys off the client). Saved data uses browser localStorage.

## Structure
- `client/` — Vite + React + TypeScript frontend (the website, built from the design file)
- `server/` — Express backend exposing `/api/chat` for the AI intake assistant
- `website-spec.md` — full product spec (source of truth for future features)

## Prerequisites
- Node.js 18+ (tested on v24)

## Setup
```bash
npm run install:all
```

## AI key (optional but needed for the chat assistant)
Copy the example env and add your Anthropic API key:
```bash
cp server/.env.example server/.env
# then edit server/.env and set ANTHROPIC_API_KEY=sk-ant-...
```
The site runs fine without a key — the AI chat widget will just show a friendly "not configured" message.

## Run (both frontend + backend)
```bash
npm run dev
```
- Frontend: http://localhost:5173
- Backend:  http://localhost:3001

The frontend proxies `/api/*` to the backend, so you only need to open the frontend URL.

## What's wired up
- **Quote funnel** — 5-step modal; answers persist to localStorage (resume banner if you leave mid-way); submitted inquiries saved under `hospigo_leads`.
- **AI intake assistant** — floating chat widget → `/api/chat` → Anthropic. Can pre-fill and open the quote funnel.
- **Savings comparison** — live country toggle (US/UK/AU).
- **Treatment search** — autocomplete in the hero.
