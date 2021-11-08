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
export default log
