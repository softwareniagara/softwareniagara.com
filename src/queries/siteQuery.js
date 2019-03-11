// Use commonJS module format as this may be consumed by NodeJS script
const gql = require('../util/gql')

module.exports = gql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`
