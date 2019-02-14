import Helmet from 'react-helmet'
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import React from 'react'

import Action from '../components/Action'
import DefaultLayout from '../layouts/Default'
import Event from '../components/Event'

export default ({ pageContext: { event } } = { event: {} }) => {
  return (
    <DefaultLayout>
      <Action to="/">
        <span role="img" aria-labelledby="button-label">📅</span> <span id="button-label">Back to Events</span>
      </Action>
      <PageTransition
        transitionTime={300}
      >
        <Event {...event} />
      </PageTransition>
      <Helmet>
        <title>{event.title} | Software Niagara</title>
        <meta name="description" content={event.summary} />
      </Helmet>
    </DefaultLayout>
  )
}
