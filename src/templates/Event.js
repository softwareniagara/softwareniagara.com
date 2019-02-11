import Helmet from 'react-helmet'
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
      <Event {...event} />
      <Helmet>
        <title>{event.title} | Software Niagara</title>
        <meta name="description" content={event.summary} />
      </Helmet>
    </DefaultLayout>
  )
}
