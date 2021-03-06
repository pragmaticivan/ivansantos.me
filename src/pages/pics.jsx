import NavigationBar from "../components/NavigationBar";
import PhotographyHighlight from "../components/PhotographyHighlight";
import PhotographyGallery from "../components/PhotographyGallery";
import React from "react";
import Layout from "../components/Layout";
// import PageTransition from "gatsby-plugin-page-transitions";

const PicsPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const posts = edges.filter(edge => !!edge.node.frontmatter.date);

  return (
    // <PageTransition>
    <Layout>
      <div>
        <header className="header__pics">
          <NavigationBar />
        </header>
        <PhotographyHighlight />
        <PhotographyGallery posts={posts} />
      </div>
    </Layout>
    // </PageTransition>
  );
};

export default PicsPage;

export const pageQuery = graphql`
  query IntoTheWildIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {fileAbsolutePath: {regex: "/(pics)/.*\\.md$/"}}
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
            image {
              childImageSharp {
                sizes(
                  maxWidth: 1600
                  quality: 90
                  traceSVG: { color: "#5C4B77" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
                resize(width: 800) {
                  src
                }
              }
            }
            lang
          }
        }
      }
    }
  }
`;
