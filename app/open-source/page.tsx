import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import OpenSource from '../../components/OpenSource';
import DefaultLayout from '../../layouts/DefaultLayout';

const OpenSourcePage = () => (
  <DefaultLayout title="Open Source" description={`Open Source`}>
    <div>
      <header className="header__blog">
        <NavigationBar />
      </header>

      <OpenSource />
    </div>
  </DefaultLayout>
);

export default OpenSourcePage;
