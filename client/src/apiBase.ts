// In local dev, Vite's proxy (vite.config.ts) forwards /api/* to the Express
// backend on :3001, so a relative path works and this stays ''.
// In production (e.g. Vercel), the frontend and backend are deployed
// separately with no proxy, so this must point at the real backend URL —
// set VITE_API_BASE_URL in the frontend host's environment variables to your
// backend's deployed URL (e.g. https://hospigo-website.onrender.com), with no
// trailing slash.
export const API_BASE = import.meta.env.VITE_API_BASE_URL || ''
