import React from 'react'

import Badge from '../Badge'
import { formatDate, isFuture } from '../../util/dates'
import StyledEventDetails, {
  StyledBody,
  StyledDateAndTime,
  StyledHeader,
  StyledH3,
  StyledH4,
  StyledTime,
} from './Details.css'

const getBadge = date => isFuture(date)
  ? <Badge primary>Coming Up</Badge>
  : null

const getDateAndTime = (date, time) => {
  const label = `${time} · ${formatDate(date)}`
  return <Badge primary={isFuture(date)}>{label}</Badge>
}

export default ({ date, summary, time, title, venue }) => {
  const badge = getBadge(date)
  const dateAndTime = getDateAndTime(date, time)

  return (
    <StyledEventDetails>
      <StyledHeader>
        <StyledH3>
          {title} {badge}
        </StyledH3>
        <StyledDateAndTime>
          {dateAndTime}
        </StyledDateAndTime>
        <StyledH4>
          <StyledTime>{time} · </StyledTime>
          {venue}
        </StyledH4>
      </StyledHeader>
      <StyledBody>
        { summary }
      </StyledBody>
    </StyledEventDetails>
  )
}
