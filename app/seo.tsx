import type { Metadata } from "next";
import { siteMetadata } from "../lib/site-metadata";

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
  path: string;
  keywords?: string[];
}

export function genPageMetadata({
  title,
  description,
  image,
  path,
  keywords,
}: PageSEOProps): Metadata {
  const pageDescription = description ?? siteMetadata.description;
  const canonicalUrl = new URL(path, `${siteMetadata.siteUrl}/`).toString();

  return {
    title,
    description: pageDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      description: pageDescription,
      card: "summary_large_image",
      creator: "@pragmaticivan",
      images: image ? [image] : [siteMetadata.socialBanner],
    },
  };
}
