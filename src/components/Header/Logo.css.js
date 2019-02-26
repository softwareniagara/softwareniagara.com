import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  svg {
    height: 8rem;
    margin-right: 0.5rem;
    width: auto;

    @media screen and (max-width: ${ theme.base.screen.sm }) {
      height: 7rem;
    }

    @media screen and (max-width: ${ theme.base.screen.xs }) {
      height: 5rem;
    }
  }
`

export const StyledH1 = styled.h1`
  color: ${ theme.light.headingColor.primary };
  font-family: ${ theme.base.fontFamily.sans };
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 1.5rem 0 0.5rem 0;

  @media screen and (max-width: ${ theme.base.screen.sm }) {
    font-size: 2rem;
    font-weight: 700;
  }

  @media screen and (max-width: ${ theme.base.screen.xs }) {
    font-size: 1.5rem;
  }
`

export const StyledH2 = styled.h2`
  color: ${ theme.light.headingColor.primary };
  font-family: ${ theme.base.fontFamily.sans };
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;

  @media screen and (max-width: ${ theme.base.screen.sm }) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: ${ theme.base.screen.xs }) {
    font-size: 1rem;
  }
`
