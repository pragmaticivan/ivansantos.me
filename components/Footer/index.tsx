import styles from './styles.module.scss';
import React from 'react';

const Footer = () => (
  <footer>
    <ul className={styles.social}>
      <li>
        <a
          href="https://twitter.com/pragmaticivan"
          aria-label="@pragmaticivan twitter"
          title="Twitter"
        >
          <i className="ri-twitter-fill"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/pragmaticivan"
          aria-label="@pragmaticivan github"
          title="Github"
        >
          <i className="ri-github-fill"></i>
        </a>
      </li>
      <li>
        <a
          href="http://www.linkedin.com/in/pragmaticivan"
          aria-label="@pragmaticivan linkedin"
          title="LinkedIn"
        >
          <i className="ri-linkedin-box-fill"></i>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
