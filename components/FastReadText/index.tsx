import { parseText } from "../../lib/fast-reading";

const FastReadText = ({ text }: { text: string }) => {
  // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a text processing component
  return <span dangerouslySetInnerHTML={{ __html: parseText(text) }} />;
};

export default FastReadText;
