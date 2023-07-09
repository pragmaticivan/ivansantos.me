import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Uses from '../components/Uses';

const IndexPage = () => (
  <div>
    <header className="header__blog">
      <NavigationBar />
    </header>

    <Uses />
  </div>
);

export default IndexPage;
