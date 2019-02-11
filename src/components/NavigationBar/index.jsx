import "./style.scss";

import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import Link from "gatsby-link";
import React from "react";

const NavigationBar =  (props) => {
  return (
    <StaticQuery
    query={graphql`
      query LogoQuery {
        logoWhite: file(relativePath: { eq: "ivan-logo-white.png" }) {
          childImageSharp {
            fixed(width: 200, height: 77) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        logoBlack: file(relativePath: { eq: "ivan-logo-black.png" }) {
          childImageSharp {
            fixed(width: 200, height: 77) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      return(
        <div className="NavigationBar">
          <h1 className="NavigationBar__logo">
            <Link to="/" title="Ivan Santos - home">
              <Img fixed={props.dark ? data.logoWhite.childImageSharp.fixed : data.logoBlack.childImageSharp.fixed} />
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
    )
    }}
  />
  )
}

export default NavigationBar;
