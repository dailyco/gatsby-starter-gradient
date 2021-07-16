import React from "react"

import Layout from "../layout"

import { useQuery } from "../utils/graphql"

import "../styles/common.scss"

export default () => {
  const data = useQuery()
  const { avatar, site } = data

  return <Layout title={site.siteMetadata.title}></Layout>
}
