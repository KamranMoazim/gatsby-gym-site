/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
        allGraphCmsBlog {
            nodes {
                slug
            }
        }
    }
  `)

  response.data.allGraphCmsBlog.nodes.forEach(node => {
    createPage({
      path: `/blogs/${node.slug}`,
      component: path.resolve("./src/templates/BlogPost.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}