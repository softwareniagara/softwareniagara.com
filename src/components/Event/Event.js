import React from 'react'

import Button from '../Button'
import { formatDate } from '../../util/dates'
import StyledEvent, {
  StyledAddress,
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledHeading,
  StyledH1,
  StyledH2,
  StyledTypography
} from './Event.css'

const mapsLink = venue => [
  'title',
  'address',
  'city',
  'province',
  'postalCode'
].reduce((accumulator, key) => {
  return `${ accumulator }${ venue[key].replace(/ /g, '+') },+`
}, 'https://maps.google.com?q=')

const renderCategory = category => {
  if (!category) {
    return
  }

  const { html, title } = category
  return (
    <>
      <StyledHeading style={{ marginTop: '2.5rem' }}>
        About {title}
      </StyledHeading>
      <StyledTypography dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

const renderVenue = venue => {
  if (!venue) {
    return
  }

  const { address, city, postalCode, province, title } = venue

  return (
    <>
      <StyledHeading style={{ marginTop: '2.5rem' }}>Venue</StyledHeading>
      <StyledAddress>
        <a href={mapsLink(venue)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <br />
        {address}<br />
        {city}, {province}<br />
        {postalCode}<br />
      </StyledAddress>
    </>
  )
}

export default event => {
  const {
    category,
    date: d,
    html,
    registration,
    time,
    title,
    venue
  } = event
  const date = formatDate(d)

  return (
    <StyledEvent>
      <StyledHeader>
        <StyledH1>{title}</StyledH1>
        <StyledH2>{time} · {date} · {venue && venue.title}</StyledH2>
      </StyledHeader>
      <StyledBody>
        <StyledHeading>Details</StyledHeading>
        <StyledTypography dangerouslySetInnerHTML={{ __html: html }} />
        {renderVenue(venue)}
        {renderCategory(category)}
      </StyledBody>
      {registration &&
        <StyledFooter>
          <Button href={registration}
            primary
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-labelledby="cta-label">🎉</span>{' '}
            <span id="cta-label">Register</span>
          </Button>
        </StyledFooter>
      }
    </StyledEvent>
  )
}
