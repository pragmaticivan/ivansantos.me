/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({
  actions,
  graphql
}) => {
  const {
    createPage
  } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.jsx`);
  const picsPostTemplate = path.resolve(`src/templates/picsTemplate.jsx`);

  return graphql(
    `
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {fileAbsolutePath: {regex: "/(\/blogposts)\/.*\.md$/"}}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              lang
            }
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({
      node
    }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          image: node.frontmatter.image,
          lang: node.frontmatter.lang
        }, // additional data can be passed via context
      });
    });
  }).then(() => {
    return graphql(
      `
    {
      allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {fileAbsolutePath: {regex: "/(\/pics)/.*\.md$/"}}
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
                lang
              }
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({
        node
      }) => {
        createPage({
          path: node.frontmatter.path,
          component: picsPostTemplate,
          context: {
            image: node.frontmatter.image,
            lang: node.frontmatter.lang
          },
        });
      });
    });
  });


};
