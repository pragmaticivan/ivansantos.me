import NavigationBar from '../components/NavigationBar';
import DefaultLayout from '../layouts/DefaultLayout';

const Custom404 = () => (
  <DefaultLayout title="404" description={`404`}>
    <header className="header__blog">
      <NavigationBar />
    </header>
    <div className="errorpage">
      <h1>:o - 404 - What are you looking for?</h1>
    </div>
  </DefaultLayout>
);

export default Custom404;
