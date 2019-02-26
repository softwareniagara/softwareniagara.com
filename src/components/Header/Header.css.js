import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.header`
  color: ${ theme.light.headingColor.primary };
  padding: 6rem 2rem 0 2rem;
  text-align: center;

  a {
    color: inherit;
    display: inline-block;
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited {
      color: inherit;
    }
  }

  @media screen and (max-width: ${ theme.base.screen.sm }) {
    padding: 2rem 1rem 1rem 1rem;
  }

  @media screen and (max-width: ${ theme.base.screen.xs }) {
    padding: 2rem 0.5rem 1rem 0.5rem;
  }
`
