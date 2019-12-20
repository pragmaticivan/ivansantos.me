import React from "react";
import NavigationBar from "../components/NavigationBar";
import GeneralDescription from "../components/GeneralDescription";
// import ResumeLink from "../components/ResumeLink";
import CallToContact from "../components/CallToContact";
import Greeting from "../components/Greeting";
import Layout from "../components/Layout";

const IndexPage = () => (
  // <PageTransition>
  <Layout>
    <div>
      <header className="header__home">
        <NavigationBar />
        <Greeting />
      </header>

      <section className="main-description">
        Hi, I’ m Ivan, a Brazilian software engineer specializing on
        fault-tolerant applications and Distributed Systems. Well-versed in numerous
        technologies including Node.js, Go, React, Graphql, Docker,
        Kubernetes and AWS.
      </section>

      <GeneralDescription />
      {/* <ResumeLink /> */}
      <CallToContact />
    </div>
  </Layout>
  // </PageTransition>
);

export default IndexPage;
