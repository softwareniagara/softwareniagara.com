import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.main`
  padding: 3rem 2rem 1rem 2rem;

  @media screen and (max-width: ${theme.base.screen.sm}) {
    padding: 2rem 1rem 1rem 1rem;
  }

  @media screen and (max-width: ${theme.base.screen.xs}) {
    padding: 1rem 0.5rem;
  }
`
