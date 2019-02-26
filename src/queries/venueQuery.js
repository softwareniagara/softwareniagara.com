// Use commonJS module format as this may be consumed by NodeJS script
const gql = require('../util/gql')

module.exports = gql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/venues/*.md"} }) {
      edges {
        node{
          frontmatter {
            address
            city
            postalCode
            province
            slug
            title
          }
        }
      }
    }
  }
`
