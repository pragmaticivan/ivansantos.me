import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import './style.scss';

const GalleryLink = ({ post }) => {
  return (
    <div className="GalleryLink">
      <Img sizes={post.frontmatter.image.childImageSharp.sizes} />
      <Link to={post.frontmatter.path}>
        <div className="GalleryLink__wrapper">
          <h2 className="GalleryLink__title">
            {post.frontmatter.title}
          </h2>
          <span className="GalleryLink__description">
            {post.frontmatter.description}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default GalleryLink;
