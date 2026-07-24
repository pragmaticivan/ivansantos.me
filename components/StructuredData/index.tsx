import type { StructuredDataSchema } from "../../lib/structured-data";

interface StructuredDataProps {
  schema: StructuredDataSchema;
}

const StructuredData = ({ schema }: StructuredDataProps) => (
  <script
    // Encoding angle brackets prevents static JSON-LD values from terminating
    // the script element if externally sourced content is added in the future.
    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires a script body
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema).replaceAll("<", "\\u003c"),
    }}
    type="application/ld+json"
  />
);

export default StructuredData;
