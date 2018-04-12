import brands from '@fortawesome/fontawesome-free-brands';
import fbImage from '../../static/facebook.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ivan Santos"
      meta={[
        { name: 'description', content: 'A Brazilian software developer specializing on fault-tolerant applications' },
        { name: 'keywords', content: 'ivan, santos' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@pragmaticivan' },
        { name: 'twitter:title', content: 'Ivan Santos' },
        { name: 'twitter:description', content: 'A Brazilian software developer specializing on fault-tolerant applications' },
        { name: 'twitter:creator', content: '@pragmaticivan' },
        { name: 'og:title', content: 'Ivan Santos' },
        { name: 'og:site_name', content: "ivansantos.me" },
        { name: 'og:type', content: "website" },
        { name: 'og:url', content: "https://ivansantos.me/"},
        { name: 'og:description', content: 'A Brazilian software developer specializing on fault-tolerant applications' },
        { name: 'og:image', content: fbImage },
        { name: 'og:site_name', content: "ivansantos.me" },
      ]}
    />
    <div>
      {children()}
    </div>
    <footer className="footer">
      <ul className="social">
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
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
