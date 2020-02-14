import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class SiteIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Dan Hannigan - Front End Developer & Designer in Denver, Colorado." />
        <Bio />
      </Layout>
    )
  }
}

export default SiteIndex
