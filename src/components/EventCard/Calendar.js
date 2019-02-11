import React from 'react'

import { getDay, getMonth, getYear } from '../../util/dates'
import StyledEventCalendar, { 
  StyledBody,
  StyledDay,
  StyledHeader,
  StyledYear,
} from './Calendar.css'

export default ({ date }) => {
  const day = getDay(date)
  const month = getMonth(date)
  const year = getYear(date)

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
