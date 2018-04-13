import React from 'react';
import Link from 'gatsby-link';
import RetinaImage from 'react-retina-image';
import './style.scss';

const PostLink = ({ post }) => {
  let langFlag = null;
  let langFlagLarger = null;
  if (post.frontmatter.lang == 'en') {
    langFlag = require('./en-flag.png');
    langFlagLarger = require('./en-flag@2x.png');
  } else {
    langFlag = require('./br-flag.png');
    langFlagLarger = require('./br-flag@2x.png');
  }
  return (
    <div className="blog-list__item">
      <Link to={post.frontmatter.path}>
        <div className="blog-list__item__date">
          {post.frontmatter.date}
        </div>
        <div className="blog-list__item__title">
          <RetinaImage src={[langFlag, langFlagLarger]} /> - {post.frontmatter.title}
        </div>
        <div className="blog-list__item__description">
          {post.frontmatter.description}
        </div>
      </Link>
    </div>
  );
};



export default PostLink;
