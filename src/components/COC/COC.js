import { Link } from 'gatsby'
import React from 'react'

import Button from '../Button'
import StyledCOC from './COC.css'

export default () => (
  <StyledCOC>
    <Button component={Link} primary pill to='/code-of-conduct'>Code of Conduct</Button>
  </StyledCOC>
)
