import styles from './styles.module.scss';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  dark?: boolean;
}

const NavigationBar = (props: Props = { dark: false }) => {
  return (
    <div className={styles.bar}>
      <h1 className={styles.logo}>
        <Link href="/" passHref={true}>
          <Image
            src={
              props.dark
                ? require('../../public/images/ivan-logo-white.png')
                : require('../../public/images/ivan-logo-black.png')
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
            <Link href="/blog" title="Blog">
              Blog
            </Link>
          </li>
          {/* <li>
            <Link href="/talks">Talks</Link>
          </li> */}
          {/* <li>
            <Link
              href="/out-there">Out there</Link>
          </li>
          <li>
            <Link
              href="/pics">Pics</Link>
          </li> */}
          <li>
            <Link href="/uses" title="Uses">
              Uses
            </Link>
          </li>
          <li>
            <Link href="/open-source" title="Open Source">
              Open Source
            </Link>
          </li>
          <li>
            <Link href="/about" title="About">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
