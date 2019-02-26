import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.article`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.125);
  color: ${ theme.light.textColor.primary };
  font-family: ${ theme.base.fontFamily.sans };
  font-size: 1rem;
  line-height: 1.2;
  margin: 0 auto;
  max-width: 36rem;
  overflow: hidden;
`

export const StyledAddress = styled.address`
  font-style: normal;
  margin-top: 20px;

  a {
    color: ${ theme.base.accentColor.primary };
    text-decoration: none;

    &:hover {
      color: ${ theme.base.accentColor.primaryDarker };
      text-decoration: underline;
    }
  }
`

export const StyledBody = styled.div`
  padding: 0.5rem 1rem 1.5rem 1rem;
`

export const StyledFooter = styled.footer`
  padding-bottom: 2rem;
  text-align: center;
`

export const StyledHeader = styled.header`
  background-color: ${ theme.base.dangerColor.primary };
  color: white;
  padding: 0.75rem 1rem;
  text-align: center;
`

export const StyledHeading = styled.h3`
  color: ${ theme.light.headingColor.primary };
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0;
`

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 0.35rem;
`

export const StyledH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`

export const StyledTypography = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  h6 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  a {
    color: ${ theme.base.accentColor.primary };
    text-decoration: none;

    &:hover {
      color: ${ theme.base.accentColor.primaryDarker };
      text-decoration: underline;
    }
  }
`
