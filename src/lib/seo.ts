import type { Metadata } from "next"
import { SITE_CONFIG } from "@/config/site"

type MetadataProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  keywords?: string[]
}

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  keywords,
}: MetadataProps = {}): Metadata {
  const finalTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name
  const finalDescription = description || SITE_CONFIG.description
  const finalImage = image || SITE_CONFIG.ogImage
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: keywords || [...SITE_CONFIG.keywords],
    authors: [{ name: SITE_CONFIG.author }],
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: finalTitle,
      description: finalDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
      creator: SITE_CONFIG.twitter,
    },
  }
}
