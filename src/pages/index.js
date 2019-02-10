import React from "react"

import COC from '../components/COC'
import Events from '../components/Events'
import Header from '../components/Header'
import Layout, { GlobalStyle } from '../components/Layout'
import Main from '../components/Main'

const events = [
  {
    id: 1,
    title: 'DevCoffee',
    date: 'February 12, 2019',
    time: '7PM',
    venue: 'Fine Grind',
    description: 'Stuff',
    summary: 'Meet local developers and socialize over the cold or warm beverage of your choice.',
    register: '/'
  },
  {
    id: 2,
    title: 'DevTricks',
    date: 'February 11, 2019',
    time: '7PM',
    venue: 'Landlord Web Solutions',
    description: 'Stuff and things',
    summary: 'In this long-lived series, up to three developers share their tips & tricks with you.',
    register: '/'
  },
  {
    id: 3,
    title: 'DevTricks',
    date: 'January 11, 2019',
    time: '7PM',
    venue: 'Landlord Web Solutions',
    description: 'Stuff and things',
    summary: 'In this long-lived series, up to three developers share their tips & tricks with you.',
    register: '/'
  }
]

export default () => (
  <>
    <Layout>
      <Header />
      <Main>
        <COC />
        <Events events={events} />
      </Main>
    </Layout>
    <GlobalStyle />
  </>
)
