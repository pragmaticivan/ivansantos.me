import styles from "./styles.module.scss";

const Footer = () => (
  <footer>
    <ul className={styles.social}>
      <li>
        <a
          aria-label="@pragmaticivan twitter"
          href="https://twitter.com/pragmaticivan"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <i className="ri-twitter-fill" />
        </a>
      </li>
      <li>
        <a
          aria-label="@pragmaticivan github"
          href="https://github.com/pragmaticivan"
          rel="noopener noreferrer"
          title="Github"
        >
          <i className="ri-github-fill" />
        </a>
      </li>
      <li>
        <a
          aria-label="@pragmaticivan linkedin"
          href="http://www.linkedin.com/in/pragmaticivan"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="ri-linkedin-box-fill" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
