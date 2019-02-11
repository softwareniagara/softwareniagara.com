const path = require('path')

const { fetchAllEvents } = require('./src/util/data')

createHomePage = (graphql, { createPage }) => fetchAllEvents(graphql).then(events => {
  const HomePageTemplate = path.resolve('src/templates/Home.js')
  createPage({
    path: '/',
    component: HomePageTemplate,
    context: {
      events,
    }
  })
})

exports.createPages = ({ graphql, actions }) => Promise.all([
  createHomePage(graphql, actions),
])
