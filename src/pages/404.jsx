import React from "react";
import NavigationBar from "../components/NavigationBar";
import NotFound from "../components/NotFound";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <div>
      <header className="header__home">
        <NavigationBar />
        <NotFound />
      </header>
    </div>
  </Layout>
);

export default NotFoundPage;
