import React from "react";
import { withPrefix } from "gatsby-link";
import styled from 'styled-components'

const Link = styled.a`
  border-radius: 8px;
  border: 1px solid #DCDCDC;
  color: #595959;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.54px;
  padding: 14px 30px;
  text-decoration: none;
  &:hover {
    color: #000000;
  }
`

const Wrapper = styled.div`
  padding: 80px 0;
  text-align: center;
`;

const ResumeLink = () => (
  <Wrapper>
    <Link href={withPrefix("/resume.pdf#non_html")} title="Get My Resume">
      GET MY RESUME
    </Link>
  </Wrapper>
);

export default ResumeLink;
