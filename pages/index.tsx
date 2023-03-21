import type { NextPage } from 'next';
import CallToContact from '../components/CallToContact';
import Greeting from '../components/Greeting';
import NavigationBar from '../components/NavigationBar';
import DefaultLayout from '../layouts/DefaultLayout';
import styles from '../styles/home.module.scss';

const title = "Hello, I'm Ivan 👋";
const subtitle = "I'm a software engineer, currently living in Austin, TX.";

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Home" description={`${title} - ${subtitle}`}>
      <header className={styles.header}>
        <NavigationBar />
        <Greeting />
      </header>

      <section className={styles.description}>
        Hi, I’m Ivan! A Brazilian/American software engineer specializing in
        fault-tolerant applications and Distributed Systems. Currently
        adventuring with Node.js, Go, Typescript, Terraform, Kubernetes, and
        AWS.
      </section>
      <CallToContact />
    </DefaultLayout>
  );
};

export default Home;
