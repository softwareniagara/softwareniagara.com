const path = require('path')

const { fetchAllEvents, fetchAllPages } = require('./src/util/data')

const fetchEvents = graphql => fetchAllEvents(graphql)
const fetchPages = graphql => fetchAllPages(graphql)

const createHomePage = (createPage, events) => {
  const HomePageTemplate = path.resolve('src/templates/Home.js')
  createPage({
    path: '/',
    component: HomePageTemplate,
    context: {
      events,
    },
  })
}

const createEventPages = (createPage, events) => {
  const EventPageTemplate = path.resolve('src/templates/Event.js')
  events.forEach(event => createPage({
    path: `/events/${ event.slug }`,
    component: EventPageTemplate,
    context: {
      event,
    },
  }))
}

const createPages = (createPage, pages) => {
  const PageTemplate = path.resolve('src/templates/Page.js')
  pages.forEach(page => createPage({
    path: `/${ page.slug }`,
    component: PageTemplate,
    context: {
      page,
    }
  }))
}

exports.createPages = ({ graphql, actions }) => new Promise(resolve => {
  const { createPage } = actions
  Promise.all([
    fetchEvents(graphql),
    fetchPages(graphql),
  ]).then(([events, pages]) => {
    createHomePage(createPage, events)
    createEventPages(createPage, events)
    createPages(createPage, pages)
    resolve()
  })
})
