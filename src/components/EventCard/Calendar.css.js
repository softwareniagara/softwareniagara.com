import styled from 'styled-components'
import theme from '../../util/theme'

export default styled.div`
  background-color: white;
  border-radius: 3px;
  border: 2px solid ${ theme.light.headingColor.primary };
  display: inline-block;
  height: auto;
  margin-bottom: auto;
  min-width: 4rem;
  overflow: hidden;

  @media screen and (max-width: ${ theme.base.screen.xs }) {
    display: none;
  }
`

export const StyledHeader = styled.div`
  background-color: ${ theme.base.dangerColor.primary };
  border-bottom: 2px solid ${ theme.light.headingColor.primary };
  color: white;
  padding: 0.4rem 0.2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`

export const StyledBody = styled.div`
  border-top: none;
  padding: 0.2rem;
  text-align: center;
  text-transform: uppercase;
`

export const StyledDay = styled.span`
  color: ${ theme.light.headingColor.primary };
  display: block;
  font-size: 1.75rem;
  font-weight: bold;
`

export const StyledYear = styled.span`
  color: ${ theme.light.mutedColor.primary };
  display: block;
  font-size: 0.8rem;
`
