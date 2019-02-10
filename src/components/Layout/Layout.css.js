import styled, { createGlobalStyle } from 'styled-components'

import theme from '../../util/theme'

export const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`

export default styled.div`
  background-color: ${theme.light.backgroundColor.secondary};
  border-top: 0.125rem solid ${theme.base.accentColor.primary};
  min-height: 100vh;
`
