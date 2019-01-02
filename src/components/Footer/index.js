import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

const Footer = () => (
  <footer className="Footer">
    <ul className="Footer__social">
      <li>
        <a href="https://twitter.com/pragmaticivan" title="Twitter">
          <FontAwesomeIcon icon={brands.faTwitter} />
        </a>
      </li>
      <li>
        <a href="https://github.com/pragmaticivan" title="Github">
          <FontAwesomeIcon icon={brands.faGithub} />
        </a>
      </li>
      <li>
        <a href="http://www.linkedin.com/in/pragmaticivan" title="LinkedIn">
          <FontAwesomeIcon icon={brands.faLinkedin} />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
