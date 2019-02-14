import React from 'react'
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import StyledLayout from './Layout.css'

export default ({ children }) => (
  <PageTransition
    transitionTime={500}
  >
    <StyledLayout>
      { children }
    </StyledLayout>
  </PageTransition>
)
