import React from 'react';
import Link from 'gatsby-link';
import NavigationBar from '../components/NavigationBar';
import GeneralDescription from '../components/GeneralDescription';
import ResumeLink from '../components/ResumeLink';
import CallToContact from '../components/CallToContact';
import Greeting from '../components/Greeting';

const IndexPage = () => (
  <div>
    <header className="header__home">
      <NavigationBar/>
      <Greeting />
    </header>

    <section className="main-description">
      Hi, I’m Ivan, a Brazilian software engineer specializing on fault-tolerant
      applications and DevOps. Well-versed in numerous technologies including
      Elixir, Ruby, Javascript, Ansible, Docker, Kubernetes and AWS.
    </section>

    <GeneralDescription/>
    <ResumeLink />
    <CallToContact />
  </div>
)

export default IndexPage
