import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.span`
  border-radius: 9999px;
  color: ${theme.light.mutedColor.primary}; 
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;

  &.is-primary {
    background-color: ${theme.base.accentColor.tertiary};
    color: ${theme.base.accentColor.tertiaryFaint};
    padding: 0.25rem 1rem;
  }

  @media screen and (max-width: ${theme.base.screen.sm}) {
    border-radius: 3px;
    font-size: 0.6;
    font-weight: 700;

    &.is-primary {
      padding: 0.25rem 0.5rem;
    }
  }
`
