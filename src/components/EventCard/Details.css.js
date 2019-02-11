import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.div`
  flex: 1;
  margin-left: 1rem;
`

export const StyledBody = styled.div`
  line-height: 1.3;
`

export const StyledDateAndTime = styled.div`
  display: none;

  @media screen and (max-width: ${theme.base.screen.xs}) {
      display: block;
  }
`

export const StyledHeader = styled.header`
  margin-bottom: 0.75rem;
`

export const StyledH3 = styled.h3`
  align-items: flex-start;
  color: ${theme.light.headingColor.primary};
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  height: auto;
  line-height: 1.2;
  justify-content: space-between;
  margin: 0;
  margin-bottom: auto;
  width: 100%;

  @media screen and (max-width: ${theme.base.screen.sm}) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: ${theme.base.screen.xs}) {
    > * {
      display: none !important;
    }
  }
`

export const StyledH4 = styled.h4`
  color: ${theme.light.headingColor.secondary};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;

  @media screen and (max-width: ${theme.base.screen.sm}) {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`

export const StyledTime = styled.span`
  font-weight: 700;

  @media screen and (max-width: ${theme.base.screen.xs}) {
    display: none;
  }
`
