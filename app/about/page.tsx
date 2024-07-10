import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import GeneralDescription from '../../components/GeneralDescription';
import { genPageMetadata } from '../seo';

export const metadata = genPageMetadata({
  title: `Hello, I'm Ivan 👋`,
  description: `I'm a software engineer, currently living in Austin, TX`,
});

const AboutPage = () => (
  <>
    <header className="header__blog">
      <NavigationBar />
    </header>
    <GeneralDescription />
  </>
);

export default AboutPage;
