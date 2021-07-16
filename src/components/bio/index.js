import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"

import Item from "./social"

import "./index.scss"

const Bio = ({ avatar, site }) => {
  const { author, introduction, social } = site.siteMetadata

  return (
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
}

Bio.propTypes = {
  site: PropTypes.object,
  avatar: PropTypes.object,
}

Bio.defaultProps = {
  site: {
    siteMetadata: {
      author: "Nickname",
      introduction: ``,
      social: {},
    },
  },
  avatar: {
    childImageSharp: {
      fixed: {},
    },
  },
}

export default Bio
