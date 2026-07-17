import { Helmet } from 'react-helmet-async'

/** Declares a `<script type="application/ld+json">` block via react-helmet-async, so it's present in both server-prerendered HTML and client-side navigation. */
export default function JsonLd({ id, data }: { id: string; data: object }) {
  return (
    <Helmet>
      <script id={`ld-json-${id}`} type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  )
}
