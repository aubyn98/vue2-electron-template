declare namespace mainProcess {
  /**
   * 打开当前窗口的开发工具
   * @param { string  } name 窗口名称
   */
  function openDevTools(name: string): () => void
}
declare module 'utils/mainProcess' {
  export = mainProcess
}
