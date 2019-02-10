import "./style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import brands from "@fortawesome/fontawesome-free-brands";

const Footer = () => (
  <footer className="Footer">
    <ul className="Footer__social">
      <li>
        <a href="https://twitter.com/pragmaticivan" aria-label="@pragmaticivan twitter" title="Twitter">
          <FontAwesomeIcon icon={brands.faTwitter} />
        </a>
      </li>
      <li>
        <a href="https://github.com/pragmaticivan" aria-label="@pragmaticivan github" title="Github">
          <FontAwesomeIcon icon={brands.faGithub} />
        </a>
      </li>
      <li>
        <a href="http://www.linkedin.com/in/pragmaticivan" aria-label="@pragmaticivan linkedin" title="LinkedIn">
          <FontAwesomeIcon icon={brands.faLinkedin} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
