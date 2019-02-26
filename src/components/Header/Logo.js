import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import StyledLogo, {
  StyledH1,
  StyledH2
} from './Logo.css'
import SvgLogo from '../../svg/Logo.svg'

const Logo = ({ name, slogan }) => (
  <StyledLogo>
    <Link to='/' title="Software Niagara" aria-labelledby="site-title">
      <SvgLogo />
    </Link>
    {name && <StyledH1 id="site-title">{name}</StyledH1>}
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
