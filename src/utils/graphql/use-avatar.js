import { useStaticQuery, graphql } from "gatsby"

export const useAvatar = () => {
  const { avatar } = useStaticQuery(graphql`
    query avatarQuery {
      avatar: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return avatar
}
