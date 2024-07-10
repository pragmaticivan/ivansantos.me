import { clsx } from 'clsx';

import CallToContact from '../components/CallToContact';
import Greeting from '../components/Greeting';
import NavigationBar from '../components/NavigationBar';
import styles from '../styles/home.module.scss';

export default function Page() {
  return (
    <>
      <header
        className={clsx(
          'w-full',
          'relative',
          'border-b-4',
          'border-b-gray-100',
          styles.header
        )}
      >
        <NavigationBar />
        <Greeting />
      </header>
      <section
        className={
          'container mx-auto max-w-screen-lg p-4 text-center text-2xl font-bold leading-10'
        }
      >
        Hi, my name is Ivan! A Brazilian/American software engineer specializing
        in fault-tolerant applications and Distributed Systems. Currently
        adventuring with Node.js, Go, Typescript, Terraform, Kubernetes, and
        AWS.
      </section>
      <CallToContact />
    </>
  );
}
