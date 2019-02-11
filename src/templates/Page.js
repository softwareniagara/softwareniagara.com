import React from 'react'

import Action from '../components/Action'
import DefaultLayout from '../layouts/Default'
import Page from '../components/Page'

export default ({ pageContext: { page } } = { page: {} }) => {
  return (
    <DefaultLayout>
      <Action to='/'>
        📅 Back to Events
      </Action>
      <Page {...page} />
    </DefaultLayout>
  )
}
