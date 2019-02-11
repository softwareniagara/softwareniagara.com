import React from 'react'

import COC from '../components/COC'
import DefaultLayout from '../layouts/Default'
import Events from '../components/Events'

export default ({ pageContext: { events } } = { events: [] }) => {
  console.log(events)
  return (
    <DefaultLayout>
      <COC />
      <Events events={events} />
    </DefaultLayout>
  )
}
