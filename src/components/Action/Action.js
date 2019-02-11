import { Link } from 'gatsby'
import React from 'react'

import Button from '../Button'
import StyledAction from './Action.css'

export default ({ children, primary = false, to }) => (
  <StyledAction>
    <Button component={Link} primary={primary} to={to}>{ children }</Button>
  </StyledAction>
)
