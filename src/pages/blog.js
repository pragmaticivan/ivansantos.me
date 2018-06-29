import NavigationBar from '../components/NavigationBar';
import PostLink from '../components/PostLink';
import React from 'react';

const BlogPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div>
      <header className="header__blog">
        <NavigationBar/>
      </header>
      <div className="blog-list">
        {Posts}
      </div>
    </div>
  );
};

export default BlogPage

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: {regex: "/(\/blogposts)\/.*\\.md$/"}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            lang
            image {
              childImageSharp {
                sizes(maxWidth: 1600, quality: 90, traceSVG: { color: "#328bff" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
                resize(width: 800) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
