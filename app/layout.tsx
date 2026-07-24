import "../styles/tailwind.css";
import "../styles/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import StructuredData from "../components/StructuredData";
import { siteMetadata } from "../lib/site-metadata";
import { websiteSchema } from "../lib/structured-data";

const geistSans = localFont({
  display: "swap",
  src: "../public/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  display: "swap",
  src: "../public/fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.headerTitle,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.headerTitle,
    description: siteMetadata.description,
    url: "/",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
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
    title: siteMetadata.headerTitle,
    card: "summary_large_image",
    creator: "@pragmaticivan",
    images: [siteMetadata.socialBanner],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <head>
        <StructuredData schema={websiteSchema()} />
      </head>

      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <NavigationBar />
        <div id="main-content" tabIndex={-1}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
        <Footer />

        <SpeedInsights />
        {process.env.NODE_ENV === "production" ? (
          <GoogleAnalytics gaId={siteMetadata.analytics.googleAnalytics.gaId} />
        ) : null}
      </body>
    </html>
  );
}
