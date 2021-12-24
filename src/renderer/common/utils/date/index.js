export function getDate(time = Date.now(), fmt = 'yyyy-MM-dd', join = '-') {
  typeof time === 'string' && (time = new Date(time).getTime())
  let date = new Date(time + 28800000).toISOString().replace('T', ' ')
  if (join !== '-' && typeof join === 'string') date = date.replaceAll('-', join)
  if (fmt === 'yyyy-MM-dd hh:mm') return date.slice(0, 16)
  if (fmt === 'yyyy-MM-dd hh:mm:ss') return date.slice(0, 19)
  if (fmt === 'yyyyMMdd') return date.slice(0, 10).replaceAll(join, '')
  if (fmt === 'yyyyMMddhhmm') return date.slice(0, 16).replaceAll(join, '').replaceAll(' ', '').replaceAll(':', '')
  if (fmt === 'yyyyMMddhhmmss') return date.slice(0, 19).replaceAll(join, '').replaceAll(' ', '').replaceAll(':', '')
  return date.slice(0, 10)
}
