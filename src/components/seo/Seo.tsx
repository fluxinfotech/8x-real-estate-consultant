import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description: string
  path?: string
  ogImage?: string
}

const SITE_NAME = '8x Real Estate Consultant'

function siteOrigin(): string {
  return typeof window !== 'undefined' ? window.location.origin : ''
}

export function Seo({ title, description, path = '', ogImage }: SeoProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const base = siteOrigin()
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`
  const image = ogImage ?? `${base}/favicon.svg`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
