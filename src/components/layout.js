import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MainContainer = styled.div`
  max-width: 64ch;
  margin: 0 auto;
  padding: 0 15px;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      )
    }
    return (
      <MainContainer>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </MainContainer>
    )
  }
}

export default Layout
