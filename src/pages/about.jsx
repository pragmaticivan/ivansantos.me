import React from "react";
import NavigationBar from "../components/NavigationBar";
import GeneralDescription from "../components/GeneralDescription";
// import ResumeLink from "../components/ResumeLink";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <div>
      <header className="header__blog">
        <NavigationBar />
      </header>

      <GeneralDescription />
    </div>
  </Layout>
);

export default IndexPage;
