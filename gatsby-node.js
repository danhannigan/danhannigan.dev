const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPost = path.resolve(`./src/templates/project-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tags
                category
                postType
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    if (post.node.frontmatter.postType === "project") {
      createPage({
        path: post.node.fields.slug,
        component: projectPost,
        context: {
          slug: post.node.fields.slug,
          category: post.node.frontmatter.category,
        },
      })
    } else {
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          category: post.node.frontmatter.category,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
