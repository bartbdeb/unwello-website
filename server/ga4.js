// Real per-article pageview counts from Google Analytics 4, via the GA4 Data
// API (a separate, read-access API from the gtag.js tracking snippet in
// client/src/analytics.ts — tracking data going IN and reading it back OUT
// use different credentials). Requires a service account with Viewer access
// on the GA4 property; see server/.env.example for setup.
//
// Without GA4_PROPERTY_ID + GOOGLE_SERVICE_ACCOUNT_JSON set, this module is a
// no-op and /api/views in index.js falls back to the self-hosted counter —
// the site works fine either way, this just makes the numbers real once
// configured.

import { BetaAnalyticsDataClient } from '@google-analytics/data'

const PROPERTY_ID = process.env.GA4_PROPERTY_ID
const SERVICE_ACCOUNT_JSON = process.env.GOOGLE_SERVICE_ACCOUNT_JSON

let client = null
if (PROPERTY_ID && SERVICE_ACCOUNT_JSON) {
  try {
    const credentials = JSON.parse(SERVICE_ACCOUNT_JSON)
    client = new BetaAnalyticsDataClient({ credentials })
  } catch (err) {
    console.error('[ga4] GOOGLE_SERVICE_ACCOUNT_JSON is set but not valid JSON — GA4 view counts disabled:', err.message)
  }
}

export const ga4Configured = () => client !== null

let cache = null // { data: {slug: views}, expiresAt }
const CACHE_TTL_MS = 60 * 60 * 1000 // 1 hour — GA4 Data API has a daily request quota

/**
 * Real pageviews per /news/:slug article, all-time since the GA4 property's
 * data retention start. Returns null if GA4 isn't configured or the API call
 * fails — callers should fall back to the self-hosted counter in that case,
 * never fabricate a number.
 */
export async function getArticleViews() {
  if (!client) return null
  if (cache && cache.expiresAt > Date.now()) return cache.data

  try {
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      // GA4 only allows querying within its actual data-retention window —
      // a fixed old date like '2015-01-01' becomes invalid once enough time
      // has passed, throwing INVALID_ARGUMENT. '365daysAgo' is a relative
      // date GA4's API resolves dynamically, so it's always in range.
      dateRanges: [{ startDate: '365daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      dimensionFilter: {
        filter: { fieldName: 'pagePath', stringFilter: { matchType: 'BEGINS_WITH', value: '/news/' } },
      },
      limit: 1000,
    })

    const data = {}
    for (const row of response.rows || []) {
      const pagePath = row.dimensionValues[0].value // e.g. "/news/dental-costs-thailand"
      const slug = pagePath.replace(/^\/news\//, '').replace(/\/$/, '')
      const views = Number(row.metricValues[0].value)
      if (slug) data[slug] = (data[slug] || 0) + views
    }

    cache = { data, expiresAt: Date.now() + CACHE_TTL_MS }
    return data
  } catch (err) {
    console.error('[ga4] Failed to fetch article views from GA4 Data API:', err.message)
    return null
  }
}
