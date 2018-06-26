import React from 'react';
import Link from 'gatsby-link';
import RetinaImage from 'react-retina-image';
import './style.scss';

const PostLink = ({ post }) => {
  const langFlag = post.frontmatter.lang == 'en' ? require('./en-flag.png') : require('./br-flag.png');
  const langFlagLarger = post.frontmatter.lang == 'en' ? require('./en-flag@2x.png') : require('./br-flag@2x.png');
  return (
    <div className="PostLink__item">
      <Link to={post.frontmatter.path}>
        <div className="PostLink__item__date">
          {post.frontmatter.date}
        </div>
        <div className="PostLink__item__title">
          <RetinaImage src={[langFlag, langFlagLarger]} /> - {post.frontmatter.title}
        </div>
        <div className="PostLink__item__description">
          {post.frontmatter.description}
        </div>
      </Link>
    </div>
  );
};



export default PostLink;
