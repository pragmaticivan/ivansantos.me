import React from 'react';
import { parseText } from '../../lib/fast-reading';

const FastReadText = ({ text }: { text: string }) => {
  return <span dangerouslySetInnerHTML={{ __html: parseText(text) }}></span>;
};

export default FastReadText;
