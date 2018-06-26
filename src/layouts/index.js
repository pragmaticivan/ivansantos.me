import fbImage from '../../static/facebook.png';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
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
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
