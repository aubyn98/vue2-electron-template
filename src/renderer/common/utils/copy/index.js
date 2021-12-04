import { Info } from 'plugins/message-info'
export function copyText(text) {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      Info.success('复制成功')
    })
    .catch(e => {
      console.log(e)
    })
}
export default copyText
