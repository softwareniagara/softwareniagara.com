import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.footer`
  color: ${theme.light.headingColor.secondary};
  font-family: ${theme.base.fontFamily.sans};
  font-size: 0.9rem;
  line-height: 1.2;
  padding: 0rem 2rem 6rem 2rem;
  text-align: center;

  @media screen and (max-width: ${theme.base.screen.sm}) {
    padding-top: 1rem;
  }
`

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 36rem;
`
