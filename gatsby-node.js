const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allContentfulWorks {
        edges {
          node {
            title
            description {
              description
            }
            updatedAt(locale: "ja-JP", formatString: "YYYY/MM/DD")
            body {
              childMarkdownRemark {
                html
              }
            }
            featuredImage {
              file {
                url
              }
            }
            createdWith
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allContentfulWorks
  const { siteUrl } = result.data.siteMetadata.siteUrl

  edges.forEach(edge => {
    createPage({
      path: `/work/${edge.node.slug}/`,
      component: path.resolve("./src/templates/work.js"),
      context: { work: edge.node, siteUrl: siteUrl },
    })
  })
}
