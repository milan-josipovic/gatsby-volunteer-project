const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      actions: allContentfulAction {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.actions.edges.forEach(({ node }) => {
    createPage({
      path: `action/${node.slug}`,
      component: path.resolve("./src/templates/action-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
