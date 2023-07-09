import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Uses from '../components/Uses';
import DefaultLayout from '../layouts/DefaultLayout';

const IndexPage = () => (
  <DefaultLayout title="Uses" description={`Uses`}>
    <div>
      <header className="header__blog">
        <NavigationBar />
      </header>

      <Uses />
    </div>
  </DefaultLayout>
);

export default IndexPage;
