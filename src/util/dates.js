import { format, isFuture as fnsIsFuture } from 'date-fns'

export const formatDate = date => format(date, 'MMM D, YYYY')
export const getDay = date => format(date, 'D')
export const getMonth = date => format(date, 'MMM')
export const getYear = date => format(date, 'YYYY')

export const isFuture = date => fnsIsFuture(date)