type eventMaps = WindowEventMap & DocumentEventMap & HTMLElementEventMap & ElementEventMap
/**
 * 为元素添加事件监听  返回值为移除监听事件的函数
 * @param target  需要添加监听事件的目标
 * @param event  监听的事件
 * @param fn  事件触发的函数
 * @param options  其他参数
 */
export function addEventListener<U, K extends keyof eventMaps>(
  target: U,
  event: K,
  fn: (this: U, ev: eventMaps[K]) => any,
  options?: Object
): () => any
export default addEventListener
