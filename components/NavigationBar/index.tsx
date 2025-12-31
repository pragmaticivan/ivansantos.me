import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  dark?: boolean;
}

const NavigationBar = (props: Props = { dark: false }) => {
  return (
    <header>
      <div className="flex flex-wrap justify-center px-10 pt-10 sm:justify-between">
        <h1>
          <Link aria-label="Ivan Santos - Go to homepage" href="/">
            <Image
              alt="Ivan Santos - Logo"
              height={77}
              priority
              src={
                props.dark
                  ? "/images/ivan-logo-white.png"
                  : "/images/ivan-logo-black.png"
              }
              width={200}
            />
          </Link>
        </h1>
        <nav aria-label="Main navigation" className={styles.menu}>
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
