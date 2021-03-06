import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layout"

// import '../css/blog-post.css'; // make it pretty!

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div className="blog-post-container">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        category
        date(formatString: "MMMM DD, YYYY")
        draft
        title
      }
    }
  }
`
