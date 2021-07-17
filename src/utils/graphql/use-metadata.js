import { useStaticQuery, graphql } from "gatsby"

export const useMetaData = () => {
  const { site } = useStaticQuery(graphql`
    query metadataQuery {
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

  return site.siteMetadata
}
