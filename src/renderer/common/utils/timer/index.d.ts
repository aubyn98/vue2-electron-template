declare namespace timer {
  function _setInterval<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): () => void

  function _setTimeout<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): () => void
}
declare module 'utils/timer' {
  export = timer
}
