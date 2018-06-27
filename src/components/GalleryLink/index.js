import React from 'react';
import Link from 'gatsby-link';
import './style.scss';

const GalleryLink = ({ post }) => {
  console.log('post', post)
  return (
    <div className="GalleryLink" style={{ backgroundImage: `url(pics/${post.frontmatter.image})` }} >
      <Link to={post.frontmatter.path}>
        <div className="GalleryLink__title">
          {post.frontmatter.title}
        </div>
        <div className="GalleryLink__description">
          {post.frontmatter.description}
        </div>
      </Link>
    </div>
  );
};

export default GalleryLink;
