import styled from 'styled-components'
import theme from '../../util/theme'

export default styled.article`
  background-color: ${ theme.light.backgroundColor.primary };
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.125);
  display: flex;
  font-family: ${ theme.base.fontFamily.sans };
  font-size: ${ theme.base.fontSize.base };
  padding: 1.5rem 1rem;
  transition: box-shadow 150ms ease-in-out;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.125);
  }

  @media only screen and (max-width: ${ theme.base.screen.sm }) {
    padding: 1rem;
  }
`
