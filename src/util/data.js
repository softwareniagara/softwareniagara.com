// Use commonJS module format as this may be consumed by NodeJS script
const categoryQuery = require('../queries/categoryQuery')
const eventQuery = require('../queries/eventQuery')
const pageQuery = require('../queries/pageQuery')
const venueQuery = require('../queries/venueQuery')

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
        city,
        date,
        registration,
        slug,
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
    city,
    html,
    date,
    registration,
    slug,
    summary,
    time,
    title,
    venue
  }
}

const parsePage = page => {
  const {
    node: {
      frontmatter: {
        slug,
        title,
      },
      html,
    }
  } = page
  return {
    html,
    slug,
    title,
  }
}

const parseVenue = venue => {
  const {
    node: {
      frontmatter: {
        address,
        city,
        postalCode,
        province,
        slug,
        title
      }
    }
  } = venue
  return {
    address,
    city,
    postalCode,
    province,
    slug,
    title
  }
}

const fetchAllEvents = (graphql) => Promise.all([
    graphql(categoryQuery),
    graphql(eventQuery),
    graphql(venueQuery),
  ])
  .then(results => {
  const [rawCategories, rawEvents, rawVenues] = results.map(result => getEdges(result))

  const categories = rawCategories.map(c => parseCategory(c))
  const venues = rawVenues.map(v => parseVenue(v))
  return rawEvents.map(e => {
    const event = parseEvent(e)
    const cMatches = categories.filter(({ slug }) => event.category === slug)
    const category = cMatches.length ? cMatches[0] : undefined
    const vMatches = venues.filter(({ slug }) => event.venue === slug)
    const venue = vMatches.length ? vMatches[0] : undefined
    return {
      ...event,
      summary: event.summary || category.summary,
      category,
      venue,
    }
  })
})

const fetchAllPages = (graphql) => graphql(pageQuery)
.then(
  results => getEdges(results).map(p => parsePage(p))
)

module.exports = {
  fetchAllEvents,
  fetchAllPages,
  getEdges,
}
