import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import GeneralDescription from '../../components/GeneralDescription';

// const title = "Hello, I'm Ivan 👋";
// const subtitle = "I'm a software engineer, currently living in Austin, TX.";

const AboutPage = () => (
  <>
    <header className="header__blog">
      <NavigationBar />
    </header>
    <GeneralDescription />
  </>
)

export default AboutPage;
