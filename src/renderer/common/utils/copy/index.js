import { Info } from 'plugins/message-info'
export function copyText(text) {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      Info.success('ε€εΆζε')
    })
    .catch(e => {
      console.log(e)
    })
}
export default copyText
