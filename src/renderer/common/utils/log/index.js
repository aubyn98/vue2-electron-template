export function log(msg, styles = []) {
  if (!Array.isArray(styles) && typeof styles === 'object') styles = [styles]
  return console.info(
    msg,
    ...styles.map(style =>
      Object.keys(style)
        .map(k => `${k.replace(/([A-Z])/g, m => '-' + m.toLocaleLowerCase())}:${style[k]}`)
        .join(';')
    )
  )
}
log.success = function (msg) {
  log('%c' + msg, { background: 'green', color: 'white', padding: '8px', margin: '4px' })
}
log.error = function (msg) {
  log('%c' + msg, { background: 'rgb(41, 0, 0)', color: 'rgb(255, 128, 128)', padding: '8px', margin: '4px' })
}
export default log
