import React from 'react';
import Link from 'gatsby-link';
import './style.scss';

const PostLink = ({ post }) => (
  <div className="blog-list__item">
    <Link to={post.frontmatter.path}>
      <div className="blog-list__item__date">
        {post.frontmatter.date}
      </div>
      <div className="blog-list__item__title">
        {post.frontmatter.title}
      </div>
      <div className="blog-list__item__description">
        {post.frontmatter.description}
      </div>
    </Link>
  </div>
);

export default PostLink;
