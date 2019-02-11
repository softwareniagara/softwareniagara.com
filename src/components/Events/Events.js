import React from 'react'

import BlankSlate from './BlankSlate'
import EventCard from '../EventCard'
import StyledEvents, {
  StyledLink,
  StyledList,
  StyledListItem,
} from './Events.css'

export default ({ events = [] }) => {
  if (!events.length) {
    return <BlankSlate>No events yet. Check back soon.</BlankSlate>
  }

  return (
    <StyledEvents>
      <StyledList>
        {events.map((event, index) => (
          <StyledListItem>
            <StyledLink key={index} to={`/events/${event.slug}`}>
              <EventCard {...event }/>
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledEvents>
  )
}
