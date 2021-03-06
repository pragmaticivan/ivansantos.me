import "./style.scss";

import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

const NavigationBar = (props) => {
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
        return (
          <div className="NavigationBar">
            <h1 className="NavigationBar__logo">
              <AniLink to="/" cover
                    duration={0.5}
                    hex="#5C4B77" title="Ivan Santos - home">
                <Img fixed={props.dark ? data.logoWhite.childImageSharp.fixed : data.logoBlack.childImageSharp.fixed} />
              </AniLink>
            </h1>
            <nav className="NavigationBar__menu">
              <ul>
                <li>
                  <AniLink
                    to="/blog"
                    duration={0.5}
                    cover
                    hex="#5C4B77"
                    rel="preload"
                  >
                    Blog
                  </AniLink>
                </li>
                <li>
                  <AniLink duration={0.5}
                    cover
                    hex="#5C4B77"
                    rel="preload" to="/talks">Talks</AniLink>
                </li>
                <li>
                  <AniLink duration={0.5}
                    cover
                    hex="#5C4B77"
                    rel="preload" to="/out-there">Out there</AniLink>
                </li>
                <li>
                  <AniLink duration={0.5}
                    cover
                    hex="#5C4B77"
                    rel="preload" to="/pics">Pics</AniLink>
                </li>
                <li>
                  <AniLink duration={0.5}
                    cover
                    hex="#5C4B77"
                    rel="preload" to="/about">About</AniLink>
                </li>
              </ul>
            </nav>
          </div>
        )
      }}
    />
  )
}

export default NavigationBar;
