import React from 'react'

import StyledPage from './Page.css'

export default ({ html }) => (
  <StyledPage>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </StyledPage>
)
