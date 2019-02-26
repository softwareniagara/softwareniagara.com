import { Link } from 'gatsby'
import styled from 'styled-components'

import theme from '../../util/theme'

export default styled.section`
  text-align: center;
`

export const StyledList = styled.ul`
  list-style: none;
  margin: 0 auto;
  max-width: 36rem;
  padding: 0;
  width: 100%;
`

export const StyledListItem = styled.li`
  margin: 0 0 1.5rem 0;
  padding: 0;
  text-align: left;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${ theme.base.screen.sm }) {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: ${ theme.base.screen.xs }) {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const StyledLink = styled(Link)`
  color: inherit;
  display: inline-block;
  text-decoration: none;
  width: 100%;
  transition: transform 150ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`
