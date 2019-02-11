// Use commonJS module format as this may be consumed by NodeJS script
const categoryQuery = require('../queries/categoryQuery')
const eventQuery = require('../queries/eventQuery')

const getEdges = ({ 
  data: { 
    allMarkdownRemark: { 
      edges 
    } 
  } 
}) => edges

const parseCategory = category => {
  const { node: { frontmatter: { slug, summary, title }, html } } = category
  return {
    html,
    slug,
    summary,
    title,
  }
}

const parseEvent = event => {
  const { 
    node: { 
      frontmatter: { 
        category,
        date, 
        summary,
        time, 
        title,
        venue 
      }, 
      html
    } 
  } = event
  return {
    category,
    html,
    date,
    summary,
    time,
    title,
    venue
  }
}

const fetchAllEvents = (graphql) => new Promise(resolve => {
    Promise.all([
      graphql(categoryQuery),
      graphql(eventQuery),
    ]).then(results => {
      const [rawCategories, rawEvents] = results.map(result => getEdges(result))

      const categories = rawCategories.map(c => parseCategory(c))
      const events = rawEvents.map(e => {
        const event = parseEvent(e)
        const matches = categories.filter(({ slug }) => event.category === slug)
        const category = matches.length ? matches[0] : undefined
        return {
          ...event,
          summary: event.summary || category.summary,
          category,
        }
      })

      resolve(events)
    })
  })

module.exports = {
  fetchAllEvents,
  getEdges,
}
