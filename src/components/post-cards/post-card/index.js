import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./index.scss"

const PostCard = ({ post }) => {
  const { id, excerpt, frontmatter, fields } = post
  const { title, category, date } = frontmatter

  return (
    <>
      <Link className="post-card" to={fields.slug}>
        <div>
          <div className="post-info">
            <span className="category">{category}</span>
            <span className="date">{date}</span>
          </div>
          <h3 className="title">{title}</h3>
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </Link>
      <div className={"divider"}></div>
    </>
  )
}

PostCard.propTypes = {
  post: PropTypes.object,
}

PostCard.defaultProps = {
  post: {},
}

export default PostCard
