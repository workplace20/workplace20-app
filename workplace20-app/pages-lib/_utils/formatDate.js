import { format } from 'date-fns'

const formatDate = (date, formatType = 'MMMM d, yyyy') => {
  return format(date, formatType);
}

export default formatDate;