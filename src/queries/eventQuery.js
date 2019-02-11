// Use commonJS module format as this may be consumed by NodeJS script
module.exports = `
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          glob: "**/events/*.md"
        } 
      },
      sort: {
        order: DESC,
        fields: [frontmatter___date, frontmatter___title]
      }
    ) {
      edges {
        node {
          frontmatter {
            category
            city
            date
            registration
            slug
            summary
            time
            title
            venue
          }
          html
        }
      }
    }
  }
`
