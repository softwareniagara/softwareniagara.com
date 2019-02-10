import React from 'react'

import { getDay, getMonth, getYear } from '../../util/dates'
import StyledEventCalendar, { 
  StyledBody,
  StyledDay,
  StyledHeader,
  StyledYear,
} from './Calendar.css'

export default ({ date }) => {
  const d = new Date(date)
  const day = getDay(d)
  const month = getMonth(d)
  const year = getYear(d)

  return (
      <StyledEventCalendar>
          <StyledHeader>{ month }</StyledHeader>
          <StyledBody>
              <StyledDay>{ day }</StyledDay>
              <StyledYear>{ year }</StyledYear>
          </StyledBody>
      </StyledEventCalendar>
  )
}
