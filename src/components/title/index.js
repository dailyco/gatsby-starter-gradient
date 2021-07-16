import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import "./index.scss"

const Title = ({ title }) => {
  return (
    <h1 className="blog-title">
      <Link to={`/`} className="link">
        {title}
      </Link>
    </h1>
  )
}

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: "Title",
}

export default Title
