import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import Uses from '../../components/Uses';
import { genPageMetadata } from '../seo';

export const metadata = genPageMetadata({
  title: `Ivan Santos Toolbox 🧰`,
  description: `Ivan Santos Toolbox`,
});

const IndexPage = () => (
  <>
    <header className="header__blog">
      <NavigationBar />
    </header>

    <Uses />
  </>
);

export default IndexPage;
