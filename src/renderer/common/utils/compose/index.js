export function compose(...fns) {
  return fns.reduce(
    (l, r) =>
      function (...argv) {
        return r.call(
          this,
          (...opt) => {
            return l.apply(this, [...argv, ...opt])
          },
          ...argv
        )
      }
  )
}
export default compose
