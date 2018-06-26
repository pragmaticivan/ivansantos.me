import React from 'react';
import { withPrefix } from 'gatsby-link';
import './style.scss';

const ResumeLink = () => (
  <div className="ResumeLink">
    <a href={withPrefix('/resume.pdf')} >GET MY RESUME</a>
  </div>
);

export default ResumeLink;
