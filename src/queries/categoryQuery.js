// Use commonJS module format as this may be consumed by NodeJS script
module.exports = `
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/categories/*.md"} }) {
      edges {
        node{
          frontmatter {
            slug
            summary
            title
          }
          html
        }
      }
    }
  }
`
