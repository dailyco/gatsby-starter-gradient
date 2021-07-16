import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./index.scss"

const Header = ({ title }) => (
  <header className="header">
    <Link to="/" className="link">
      {title}
    </Link>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "Title",
}

export default Header
