import React from "react"
import PropTypes from "prop-types"

import PostCard from "./post-card"

import "./index.scss"

const PostCards = ({ posts }) => {
  return (
    <div className="post-cards">
      {posts.map(({ node: post }) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

PostCards.propTypes = {
  posts: PropTypes.array,
}

PostCards.defaultProps = {
  posts: [],
}

export default PostCards
