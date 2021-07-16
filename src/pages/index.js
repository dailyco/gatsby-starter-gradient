import React from "react"

import Layout from "../layout"

import { useQuery } from "../utils/graphql"

import Title from "../components/title"
import Bio from "../components/bio"

import "../styles/common.scss"

export default () => {
  const data = useQuery()
  const { avatar, site } = data

  return (
    <Layout title={site.siteMetadata.title}>
      <Title title={site.siteMetadata.title} />
      <Bio avatar={avatar} site={site} />
    </Layout>
  )
}
