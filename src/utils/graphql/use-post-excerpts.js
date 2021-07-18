import { useStaticQuery, graphql } from "gatsby"

export const usePostExcerpts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query postsQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250, truncate: true)
            frontmatter {
              title
              category
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return allMarkdownRemark.edges
}
