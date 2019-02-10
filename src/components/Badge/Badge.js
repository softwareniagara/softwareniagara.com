import React from 'react'

import StyledBadge from './Badge.css'

export default ({ children, primary }) => (
  <StyledBadge className={primary && 'is-primary'}>{children}</StyledBadge>
)
