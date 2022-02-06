import NavigationBar from "../components/NavigationBar";
import OutThereLink from "../components/OutThereLink";
import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
// import PageTransition from "gatsby-plugin-page-transitions";

const OutTherePage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <OutThereLink key={edge.node.id} post={edge.node} />);

  return (
    // <PageTransition>
    <Layout>
      <div>
        <header className="header__blog">
          <NavigationBar />
        </header>
        <div className="blog-list"> {Posts} </div>
      </div>
    </Layout>
    // </PageTransition>
  );
};

export default OutTherePage;

export const pageQuery = graphql`
  query OutThereQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {fileAbsolutePath: {regex: "/(out-there)/.*\\.md$/"}}
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
          }
        }
      }
    }
  }
`;
