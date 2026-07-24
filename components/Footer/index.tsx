import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import styles from "./styles.module.scss";

const socialLinks = [
  {
    href: "https://x.com/pragmaticivan",
    label: "X",
    icon: RiTwitterXFill,
  },
  {
    href: "https://github.com/pragmaticivan",
    label: "GitHub",
    icon: RiGithubFill,
  },
  {
    href: "https://www.linkedin.com/in/pragmaticivan",
    label: "LinkedIn",
    icon: RiLinkedinBoxFill,
  },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div>
        <Link className={styles.name} href="/">
          Ivan Santos
        </Link>
        <p>
          Staff engineering and consulting across platforms, AI, and developer
          productivity.
        </p>
      </div>

      <div className={styles.social}>
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            aria-label={`Ivan Santos on ${label}`}
            href={href}
            key={label}
            rel="noreferrer"
            target="_blank"
            title={label}
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
