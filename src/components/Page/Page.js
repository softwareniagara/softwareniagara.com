import React from 'react'

import StyledPage, { StyledLink, StyledNav } from './Page.css'

export default ({ title, html }) => (
  <StyledPage>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </StyledPage>
)
