import "./style.scss";

import Link from "gatsby-link";
import React from "react";
import RetinaImage from "react-retina-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const PostLink = ({ post }) => {
  const langFlag =
    post.frontmatter.lang === "en"
      ? require("./en-flag.png")
      : require("./br-flag.png");
  const langFlagLarger =
    post.frontmatter.lang === "en"
      ? require("./en-flag@2x.png")
      : require("./br-flag@2x.png");
  return (
    <div className="PostLink__item">
      <AniLink
        to={post.frontmatter.path}
        cover
        hex="#5C4B77"
        rel="preload"
      >
        <div className="PostLink__item__date">{post.frontmatter.date}</div>
        <div className="PostLink__item__title">
          <RetinaImage src={[langFlag, langFlagLarger]} alt={post.frontmatter.lang === "en" ? "American Flag": "Brazilian Flag"} /> -{" "}
          {post.frontmatter.title}
        </div>
        <div className="PostLink__item__description">
          {post.frontmatter.description}
        </div>
      </AniLink>
    </div>
  );
};

export default PostLink;
