import { siteMetadata } from "../../lib/site-metadata";

interface StructuredDataProps {
  type?: "website" | "article" | "person";
  data?: Record<string, string | number | boolean>;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type = "website",
  data = {},
}) => {
  const typeMap = {
    website: "WebSite",
    article: "Article",
    person: "Person",
  };

  const baseData = {
    "@context": "https://schema.org",
    "@type": typeMap[type],
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    author: {
      "@type": "Person",
      name: siteMetadata.author,
      url: siteMetadata.siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: siteMetadata.author,
    },
    ...data,
  };

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires this
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData),
      }}
      type="application/ld+json"
    />
  );
};

export default StructuredData;
