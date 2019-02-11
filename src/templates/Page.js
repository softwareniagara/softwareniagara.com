import React from 'react'

import DefaultLayout from '../layouts/Default'

export default ({ pageContext: { page } } = { page: {} }) => {
  return (
    <DefaultLayout>
      <p>{page.title}</p>
    </DefaultLayout>
  )
}
