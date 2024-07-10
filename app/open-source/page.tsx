import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import OpenSource from '../../components/OpenSource';
import { genPageMetadata } from '../seo';

export const metadata = genPageMetadata({
  title: `Open Source ✍️`,
  description: `I share anything that may help others, technologies I'm using and cool things I've made`,
});

const OpenSourcePage = () => (
  <div>
    <header className="header__blog">
      <NavigationBar />
    </header>

    <OpenSource />
  </div>
);

export default OpenSourcePage;
