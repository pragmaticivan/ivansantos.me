import NavigationBar from '../components/NavigationBar';
import PhotographyHighlight from '../components/PhotographyHighlight';
import React from 'react';

const PicsPage = () => {
  return (
    <div>
      <header className="header__pics">
        <NavigationBar/>
      </header>

      <PhotographyHighlight />

    </div>
  );
};

export default PicsPage;
