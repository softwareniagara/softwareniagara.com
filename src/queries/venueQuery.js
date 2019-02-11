// Use commonJS module format as this may be consumed by NodeJS script
module.exports = `
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
