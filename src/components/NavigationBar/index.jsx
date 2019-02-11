import "./style.scss";

import Link from "gatsby-link";
import React from "react";
import RetinaImage from "react-retina-image";

class NavigationBar extends React.Component {
  render() {
    const logo = this.props.dark
      ? require("./ivan-logo-white.png")
      : require("./ivan-logo-black.png");
    const logoLarger = this.props.dark
      ? require("./ivan-logo-white@2x.png")
      : require("./ivan-logo-black@2x.png");

    return (
      <div className="NavigationBar">
        <h1 className="NavigationBar__logo">
          <Link to="/" title="Ivan Santos - home">
            <RetinaImage src={[logo, logoLarger]} alt={"Ivan Santos Logo"} />
          </Link>
        </h1>
        <nav className="NavigationBar__menu">
          <ul>
            <li>
              <Link to="/blog" rel="preload">Blog</Link>
            </li>
            {/* <li>
              <Link to="/pics">Pics</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
