import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import StyledLogo, {
  StyledH1,
  StyledH2,
} from './Logo.css'
import SvgLogo from '../../svg/Logo.svg'

const Logo = ({ name, slogan }) => (
  <StyledLogo>
    <Link to='/'>
      <SvgLogo />
    </Link>    
    {name && <StyledH1>{name}</StyledH1>}
    {slogan && <StyledH2>{slogan}</StyledH2>}
  </StyledLogo>
)

Logo.defaultProps = {
  name: '',
  slogan: '',
}

Logo.propTypes = {
  name: PropTypes.string,
  slogan: PropTypes.string,
}

export default Logo
