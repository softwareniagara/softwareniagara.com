import React from 'react'

import Header from '../components/Header'
import Layout, { GlobalStyle } from '../components/Layout'
import Main from '../components/Main'

export default ({ children }) => (
  <>
    <Layout>
      <Header />
      <Main>
        {children}
      </Main>
    </Layout>
    <GlobalStyle />
  </>
)
