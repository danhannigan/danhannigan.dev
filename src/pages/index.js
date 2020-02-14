import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class SiteIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges
    // const postEdges = data.blog.edges
    // const projectEdges = data.project.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="Dan Hannigan - Front End Developer & Designer in Denver, Colorado." />
        <Bio />
        {/* <h2>Projects</h2>
        {projectEdges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
        <h2>Blog</h2>
        {postEdges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })} */}
      </Layout>
    )
  }
}

export default SiteIndex

// export const pageQuery = graphql`
//   query IndexQuery {
//     blog: allMarkdownRemark(
//       limit: 2000
//       filter: { fileAbsolutePath: { regex: "/blog/" } }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             date
//           }
//         }
//       }
//     }
//     project: allMarkdownRemark(
//       limit: 2000
//       filter: { fileAbsolutePath: { regex: "/project/" } }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             date
//           }
//         }
//       }
//     }
//   }
// `
