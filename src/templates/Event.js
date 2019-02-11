import React from 'react'

import Action from '../components/Action'
import DefaultLayout from '../layouts/Default'
import Event from '../components/Event'

export default ({ pageContext: { event } } = { event: {} }) => {
  return (
    <DefaultLayout>
      <Action to="/">📅 Back to Events</Action>
      <Event {...event} />
    </DefaultLayout>
  )
}
