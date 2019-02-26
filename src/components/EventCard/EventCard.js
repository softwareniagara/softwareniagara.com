import React from 'react'

import Calendar from './Calendar'
import Details from './Details'
import StyledEventCard from './EventCard.css'

export default ({ date, ...rest }) => (
  <StyledEventCard>
    <Calendar date={date} />
    <Details { ...{ date, ...rest } } />
  </StyledEventCard>
)
