import { Link } from 'gatsby'
import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.article`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.125);
  color: ${theme.light.textColor.primary};
  font-family: ${theme.base.fontFamily.sans};
  font-size: 1rem;
  line-height: 1.2;
  margin: 0 auto;
  max-width: 36rem;
  padding: 1.5rem 1rem;
  overflow: hidden;

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.light.headingColor.primary};
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
    color: ${theme.base.accentColor.primary};
    text-decoration: none;

    &:hover {
      color: ${theme.base.accentColor.primaryDarker};
      text-decoration: underline;
    }
  }
`
