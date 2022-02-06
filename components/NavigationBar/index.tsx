import styles from "./NavigationBar.module.scss";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import logoBlack from '../../public/images/ivan-logo-black.png'

const NavigationBar = () => {
  return (
    <div className={styles.NavigationBar}>
      <h1 className={styles.logo}>
        <Link href="/" passHref={true}>
          <Image src={logoBlack} width={200} height={77} alt="Logo Ivan Santos - black" />
        </Link>
      </h1>
      <nav className={styles.menu}>
        <ul>
          {/* <li>
            <Link
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link href="/talks">Talks</Link>
          </li>
          <li>
            <Link
              href="/out-there">Out there</Link>
          </li>
          <li>
            <Link
              href="/pics">Pics</Link>
          </li> */}
          <li>
            <Link
              href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationBar;
