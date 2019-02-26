import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.footer`
  color: ${ theme.light.headingColor.secondary };
  font-family: ${ theme.base.fontFamily.sans };
  font-size: 0.8rem;
  line-height: 1.2;
  padding: 1rem 2rem 6rem 2rem;
  text-align: center;

  @media screen and (max-width: ${ theme.base.screen.sm }) {
    padding-top: 1rem;
  }
`

export const StyledContainer = styled.div`
  border-top: 1px solid white;
  box-shadow: 0px -1px 0px rgba(64, 64, 64, 0.125);
  margin: 0 auto;
  padding-top: 1rem;
  max-width: 36rem;
  text-align: left;
`
