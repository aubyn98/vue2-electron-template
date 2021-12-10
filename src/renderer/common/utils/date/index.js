export function getDate(time = Date.now(), fmt = 'yyyy-MM-dd') {
  typeof time === 'string' && (time = new Date(time).getTime())
  const date = new Date(time + 28800000).toISOString().replace('T', ' ')
  if (fmt === 'yyyy-MM-dd hh:mm') return date.slice(0, 16)
  if (fmt === 'yyyy-MM-dd hh:mm:ss') return date.slice(0, 19)
  return date.slice(0, 10)
}
