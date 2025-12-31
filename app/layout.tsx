import "../styles/tailwind.css";
import "../styles/globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import StructuredData from "../components/StructuredData";
import { siteMetadata } from "../lib/site-metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <link href="/favicon.png" rel="icon" sizes="any" type="image/png" />

      <body>
        <ErrorBoundary>{children}</ErrorBoundary>

        <SpeedInsights />
        <GoogleTagManager
          gtmId={siteMetadata.analytics.googleTagManager.googleTagManagerId}
        />
      </body>
    </html>
  );
}
