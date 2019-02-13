import styled from 'styled-components'

import theme from '../../util/theme'

export default (Component) => styled(Component)`
  background: ${theme.base.accentColor.primary};
  border: 3px solid ${theme.base.accentColor.primary};
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: ${theme.base.fontFamily.sans};
  font-size: ${theme.base.fontSize.base};
  font-weight: 600;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 150ms ease-in-out;

  &:hover {
    background: ${theme.base.accentColor.primaryDarker};
    border-color: ${theme.base.accentColor.primaryDarker};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    transform: translateY(-5px);
  }

  &.is-pill {
    border-radius: 9999px;
  }

  &.is-secondary {
    background: white;
    color: ${theme.base.accentColor.primary};

    &:hover {
      color: ${theme.base.accentColor.primaryDarker};
    }
  }

  @media screen and (max-width: ${theme.base.screen.sm}) {
    padding: 1rem 1.5rem;
  }
`
