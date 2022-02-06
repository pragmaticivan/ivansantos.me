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
          <a>
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
          </a>
        </Link>
      </h1>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/blog">
              <a title="Blog">Blog</a>
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
            <Link href="/about">
              <a title="About">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
