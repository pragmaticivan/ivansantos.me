import React from "react";
import NavigationBar from '../components/NavigationBar';
import BlogAvatar from '../components/BlogAvatar';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, file } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <header className="header__blog-post" style={{ backgroundImage: `url(${file.childImageSharp.resolutions.src})` }}>
        <NavigationBar dark={true}/>
        <BlogAvatar/>
      </header>
      <div className="blog-post--container">
        <div className="blog-post">
          <h2 className="blog-post--date">{frontmatter.date}</h2>
          <h1 className="blog-post--title">{frontmatter.title}</h1>
          <div className="blog-post--content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PicsPostByPath($path: String!, $image: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        image
      }
    }
    file(relativePath: { eq: $image}) {
      childImageSharp {
        resolutions(width: 1900) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }
  }
`;
