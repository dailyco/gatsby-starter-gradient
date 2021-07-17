import React from "react"

import { useAvatar } from "../utils/graphql/use-avatar"
import { useMetaData } from "../utils/graphql/use-metadata"
import { usePosts } from "../utils/graphql/use-posts"

import Layout from "../layout"
import Title from "../components/title"
import Bio from "../components/bio"
import PostCards from "../components/post-cards"

import "../styles/reset.scss"
import "../styles/common.scss"

export default () => {
  const avatar = useAvatar()
  const { title, author, introduction, social } = useMetaData()
  const posts = usePosts()
  console.log(posts)

  return (
    <Layout title={title}>
      <Title title={title} />
      <Bio
        avatar={avatar}
        author={author}
        introduction={introduction}
        social={social}
      />
      <PostCards posts={posts} />
    </Layout>
  )
}
