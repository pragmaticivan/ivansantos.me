import React from 'react';
import NavigationBar from '../components/NavigationBar';
import GeneralDescription from '../components/GeneralDescription';
import DefaultLayout from '../layouts/DefaultLayout';

const title = "Hello, I'm Ivan 👋";
const subtitle = "I'm a software engineer, currently living in Austin, TX.";

const AboutPage = () => (
  <DefaultLayout title={title} description={`${title} - ${subtitle}`}>
    <header className="header__blog">
      <NavigationBar />
    </header>

    <GeneralDescription />
  </DefaultLayout>
);

export default AboutPage;
