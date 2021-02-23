import { format } from 'date-fns'

export default (date, formatType = 'MMMM d, yyyy') => {
  return format(date, formatType);
}