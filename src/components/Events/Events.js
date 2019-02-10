import React from 'react'

import EventCard from '../EventCard'
import StyledEvents, {
  StyledLink,
  StyledList,
  StyledListItem,
} from './Events.css'

export default ({ events }) => (
  <StyledEvents>
    <StyledList>
      {events.map(event => (
        <StyledListItem>
          <StyledLink key={event.id}>
            <EventCard {...event }/>
          </StyledLink>
        </StyledListItem>
      ))}
    </StyledList>
  </StyledEvents>
)
