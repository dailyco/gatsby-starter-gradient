import React from "react"
import PropTypes from "prop-types"

import Header from "../components/header"
import Footer from "../components/footer"

import "./index.scss"

const Layout = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  title: "Title",
  children: <></>,
}

export default Layout
