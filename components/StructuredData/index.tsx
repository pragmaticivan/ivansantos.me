import { siteMetadata } from '../../lib/site-metadata';

interface StructuredDataProps {
  type?: 'website' | 'article' | 'person';
  data?: Record<string, string | number | boolean>;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'website',
  data = {},
}) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type':
      type === 'website'
        ? 'WebSite'
        : type === 'article'
          ? 'Article'
          : 'Person',
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    author: {
      '@type': 'Person',
      name: siteMetadata.author,
      url: siteMetadata.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: siteMetadata.author,
    },
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData),
      }}
    />
  );
};

export default StructuredData;
