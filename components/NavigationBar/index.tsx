import styles from './styles.module.scss';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  dark?: boolean;
}

const NavigationBar = (props: Props = { dark: false }) => {
  return (
    <header>
      <div className="flex flex-wrap justify-center px-10 pt-10 sm:justify-between">
        <h1>
          <Link href="/" passHref={true}>
            <Image
              src={
                props.dark
                  ? '/images/ivan-logo-white.png'
                  : '/images/ivan-logo-black.png'
              }
              width={200}
              height={77}
              alt="Ivan Santos - Logo"
            />
          </Link>
        </h1>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link href="/about" title="About">
                About
              </Link>
            </li>
            <li>
              <Link href="/uses" title="Uses">
                Uses
              </Link>
            </li>
            <li>
              <Link href="/blog" title="Blog">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/open-source" title="Open Source">
                Open Source
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
