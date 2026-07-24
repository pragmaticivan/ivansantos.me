import type { Article } from "../types/article";
import { siteMetadata } from "./site-metadata";

export type StructuredDataSchema = Record<string, unknown>;

export const personId = `${siteMetadata.siteUrl}/#person`;
const websiteId = `${siteMetadata.siteUrl}/#website`;

export function absoluteUrl(pathOrUrl: string): string {
  return new URL(pathOrUrl, `${siteMetadata.siteUrl}/`).toString();
}

export function personSchema(): StructuredDataSchema {
  return {
    "@type": "Person",
    "@id": personId,
    name: siteMetadata.author,
    url: `${siteMetadata.siteUrl}/`,
    image: siteMetadata.profileImage,
    email: `mailto:${siteMetadata.email}`,
    jobTitle: "Staff Engineer and Engineering Consultant",
    description: siteMetadata.description,
    sameAs: [siteMetadata.github, siteMetadata.linkedin, siteMetadata.x],
    knowsAbout: [
      "Platform engineering",
      "AI engineering",
      "Developer productivity",
      "Distributed systems",
      "Observability",
      "Kubernetes",
    ],
  };
}

export function websiteSchema(): StructuredDataSchema {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteMetadata.siteUrl}/`,
        name: siteMetadata.title,
        alternateName: siteMetadata.headerTitle,
        description: siteMetadata.description,
        inLanguage: siteMetadata.locale,
        author: { "@id": personId },
        publisher: { "@id": personId },
      },
      personSchema(),
    ],
  };
}

export function profilePageSchema(): StructuredDataSchema {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteMetadata.siteUrl}/about/#profile`,
        url: `${siteMetadata.siteUrl}/about`,
        name: `About ${siteMetadata.author}`,
        description:
          "Professional profile of Ivan Santos, a staff engineer and engineering consultant working across platform engineering and production AI systems.",
        mainEntity: { "@id": personId },
        isPartOf: { "@id": websiteId },
        inLanguage: siteMetadata.locale,
      },
      personSchema(),
    ],
  };
}

export function consultingSchema(): StructuredDataSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteMetadata.siteUrl}/consulting/#service`,
    url: `${siteMetadata.siteUrl}/consulting`,
    name: "Ivan Santos Engineering Consulting",
    description:
      "Platform engineering, production AI systems, developer productivity, observability, and technical strategy consulting.",
    email: `mailto:${siteMetadata.email}`,
    provider: { "@id": personId },
    serviceType: [
      "Platform engineering consulting",
      "AI engineering consulting",
      "Developer productivity consulting",
      "Engineering strategy",
    ],
    isPartOf: { "@id": websiteId },
  };
}

interface ArticleSchemaInput {
  article: Partial<Article>;
  url: string;
}

export function articleSchema({
  article,
  url,
}: ArticleSchemaInput): StructuredDataSchema {
  const publishedDate = article.date ?? "";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: article.title,
    description: article.description,
    image: article.image ? absoluteUrl(article.image) : undefined,
    datePublished: publishedDate,
    dateModified: article.updated ?? publishedDate,
    inLanguage: article.language ?? siteMetadata.locale,
    author: { "@id": personId },
    publisher: { "@id": personId },
    mainEntityOfPage: url,
    isPartOf: { "@id": websiteId },
  };
}

export function articleBreadcrumbSchema({
  title,
  url,
}: {
  title: string;
  url: string;
}): StructuredDataSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Blog",
        item: `${siteMetadata.siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: url,
      },
    ],
  };
}
