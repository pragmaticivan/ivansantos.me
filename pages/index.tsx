import type { NextPage } from 'next';
import Head from 'next/head';
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
      <Head>
        <title>Ivan Santos</title>
        <meta
          name="description"
          content="A Brazilian software engineer specializing in
          fault-tolerant applications and Distributed Systems"
        />
      </Head>

      <main>
        <header className={styles.header}>
          <NavigationBar />
          <Greeting />
        </header>

        <section className={styles.description}>
          Hi, I’m Ivan! A Brazilian software engineer specializing in
          fault-tolerant applications and Distributed Systems. Currently
          adventuring with Node.js, Go, Typescript, Terraform, Kubernetes, and
          AWS.
        </section>

        <CallToContact />
      </main>
    </DefaultLayout>
  );
};

export default Home;
