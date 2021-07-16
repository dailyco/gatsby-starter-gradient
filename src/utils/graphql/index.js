import { useStaticQuery, graphql } from "gatsby"

export const useQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author
          introduction
          social {
            twitter
            github
            medium
            facebook
            linkedin
            instagram
          }
        }
      }
    }
  `)
  return data
}
