import React from 'react';
import NavigationBar from '../components/NavigationBar';
import GeneralDescription from '../components/GeneralDescription';

const IndexPage = () => (
  <div>
    <header className="header__blog">
      <NavigationBar />
    </header>

    <GeneralDescription />
  </div>
);

export default IndexPage;
