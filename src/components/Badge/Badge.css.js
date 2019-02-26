import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.span`
  border-radius: 9999px;
  color: ${ theme.light.mutedColor.primary }; 
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 0.25rem;
  text-transform: uppercase;
  white-space: nowrap;

  &.is-primary {
    background-color: ${ theme.base.accentColor.tertiary };
    color: ${ theme.base.accentColor.tertiaryFaint };
    padding: 0.25rem 1rem;
  }

  @media screen and (max-width: ${ theme.base.screen.sm }) {
    font-size: 0.6rem;
    font-weight: 700;
  }

  @media screen and (max-width: ${ theme.base.screen.xs }) {
    border-radius: 3px;

    &.is-primary {
      padding: 0.25rem 0.5rem;
    }
  }
`
