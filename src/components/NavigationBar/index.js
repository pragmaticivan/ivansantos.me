import React from 'react';
import Link from 'gatsby-link';
import RetinaImage from 'react-retina-image';
import './style.scss';

class NavigationBar extends React.Component {
  render() {
    let logo = null;
    let logoLarger = null;
    if (this.props.dark) {
      logo = require('./ivan-logo-white.png');
      logoLarger = require('./ivan-logo-white@2x.png');
    } else {
      logo = require('./ivan-logo-black.png');
      logoLarger = require('./ivan-logo-black@2x.png');
    }
    return(
      <div className="navigation-bar">
        <h1 className="logo">
          <Link to="/">
            <RetinaImage src={[logo, logoLarger]} />
          </Link>
        </h1>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavigationBar;
