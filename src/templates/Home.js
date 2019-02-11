import Helmet from 'react-helmet'
import React from 'react'

import Action from '../components/Action'
import DefaultLayout from '../layouts/Default'
import Events from '../components/Events'

export default ({ pageContext: { events } } = { events: [] }) => {
  return (
    <DefaultLayout>
      <Action primary to='/code-of-conduct'>
        <span role="img" aria-labelledby="button-label">📜</span> <span id="button-label">Code of Conduct</span>
      </Action>
      <Events events={events} />
      <Helmet>
        <title>Events | Software Niagara</title>
        <meta name="description" content="Startup and tech events for web and game developers in Niagara" />
      </Helmet>
    </DefaultLayout>
  )
}
