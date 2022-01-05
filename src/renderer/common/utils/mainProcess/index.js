import { ipcRenderer } from 'electron'
import addEventListener from '../addEventListener'
export function openDevTools(name) {
  return addEventListener(document, 'keydown', e => {
    if (e.ctrlKey && e.altKey && e.keyCode === 49 && e.code) {
      ipcRenderer.send('openDevTools', name)
    }
  })
}
export default { openDevTools }
