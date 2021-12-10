declare module 'utils/compose' {
  export function compose(...params: Array<(params: any) => {}>): (params: any) => {}
  export default compose
}
