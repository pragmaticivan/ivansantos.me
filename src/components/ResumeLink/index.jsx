import "./style.scss";

import React from "react";
import { withPrefix } from "gatsby-link";

const ResumeLink = () => (
  <div className="ResumeLink">
    <a href={withPrefix("/resume.pdf#non_html")} title="Get My Resume">GET MY RESUME</a>
  </div>
);

export default ResumeLink;
