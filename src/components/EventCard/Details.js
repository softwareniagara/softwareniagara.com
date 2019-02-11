import React from 'react'
import styled from 'styled-components'

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
  const d = new Date(date)
  const badge = getBadge(d)
  const dateAndTime = getDateAndTime(d, time)

  return (
    <StyledEventDetails>
      <StyledHeader>
        <StyledH3>
          <span>{title}</span> {badge}
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
