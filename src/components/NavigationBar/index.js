import React from 'react';
import Link from 'gatsby-link';
import RetinaImage from 'react-retina-image';
import './style.scss';

class NavigationBar extends React.Component {
  render() {
    const logo = this.props.dark ? require('./ivan-logo-white.png') : require('./ivan-logo-black.png');
    const logoLarger = this.props.dark ? require('./ivan-logo-white@2x.png') : require('./ivan-logo-black@2x.png');

    return(
      <div className="NavigationBar">
        <h1 className="NavigationBar__logo">
          <Link to="/">
            <RetinaImage src={[logo, logoLarger]} />
          </Link>
        </h1>
        <nav className="NavigationBar__menu">
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
