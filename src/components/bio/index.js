import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"

import Item from "./social"

import "./index.scss"

const Bio = ({ avatar, author, introduction, social }) => (
  <div className="bio">
    <div className="author">
      <div className="author-description">
        <Image
          className="author-image"
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          style={{
            borderRadius: `100%`,
          }}
        />
        <div className="author-name">
          <span className="author-name-prefix">About</span>
          <Link to={"/about"} className="author-name-content">
            <span>@{author}</span>
          </Link>
          <div className="author-introduction">{introduction}</div>
          <p className="author-socials">
            {Object.keys(social).map(type => (
              <Item key={type} type={type} value={social[type]} />
            ))}
          </p>
        </div>
      </div>
    </div>
  </div>
)

Bio.propTypes = {
  avatar: PropTypes.object,
  author: PropTypes.string,
  introduction: PropTypes.string,
  social: PropTypes.object,
}

Bio.defaultProps = {
  avatar: {},
  author: "nickname",
  introduction: "Front-end developer",
  social: {},
}

export default Bio
