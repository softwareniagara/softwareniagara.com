import React from 'react'

import DefaultLayout from '../layouts/Default'

export default ({ pageContext: { event } } = { event: {} }) => {
  return (
    <DefaultLayout>
      <p>{event.title}</p>
    </DefaultLayout>
  )
}
