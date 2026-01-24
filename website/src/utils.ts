import type { TimeRange } from '@/model/data_structures'

export function formatTimeRange(range: TimeRange) {
  // if end date is higher than today, replace it with "Present"
  const today = new Date()
  const endDate = new Date(range.end)
  if (endDate > today) return formatDate(range.start) + ' to Present'
  else if (range.end)
    return formatDate(range.start) + ' to ' + formatDate(range.end)
}

function formatDate(dateString: string) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date = new Date(dateString)
  return months[date.getMonth()] + ' ' + date.getFullYear()
}
