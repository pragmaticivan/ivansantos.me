import styles from "./styles.module.scss";

const Footer = () => (
  <footer>
    <ul className={styles.social}>
      <li>
        <a
          aria-label="@pragmaticivan twitter"
          href="https://twitter.com/pragmaticivan"
          title="Twitter"
        >
          <i className="ri-twitter-fill" />
        </a>
      </li>
      <li>
        <a
          aria-label="@pragmaticivan github"
          href="https://github.com/pragmaticivan"
          title="Github"
        >
          <i className="ri-github-fill" />
        </a>
      </li>
      <li>
        <a
          aria-label="@pragmaticivan linkedin"
          href="http://www.linkedin.com/in/pragmaticivan"
          title="LinkedIn"
        >
          <i className="ri-linkedin-box-fill" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
