import React from 'react'

import Action from '../components/Action'
import DefaultLayout from '../layouts/Default'
import Events from '../components/Events'

export default ({ pageContext: { events } } = { events: [] }) => {
  return (
    <DefaultLayout>
      <Action primary to='/code-of-conduct'>
       📜 Code of Conduct
      </Action>
      <Events events={events} />
    </DefaultLayout>
  )
}
