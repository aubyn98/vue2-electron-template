const pickerOpts = {
  types: [
    {
      description: '选择图片',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
      },
    },
  ],
  excludeAcceptAllOption: true,
}

export function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = e => {
      resolve(e.target.result)
    }
    fileReader.onerror = e => {
      reject(e)
    }
  })
}

export async function getFile(opts = {}) {
  try {
    const fileList = []
    const fileHandles = await window.showOpenFilePicker(opts)
    for (let item of fileHandles) {
      const file = await item.getFile()
      fileList.push(file)
    }
    return fileList
  } catch (e) {
    return Promise.reject(e)
  }
}

export async function imgFilesHandle(imgFiles = []) {
  try {
    const imgList = []
    for (let file of imgFiles) {
      const dataURL = await readAsDataURL(file)
      imgList.push({ dataURL, file })
    }
    return imgList
  } catch (e) {
    return Promise.reject(e)
  }
}

export async function getImgFile(opts = { multiple: false }) {
  try {
    const fileList = []
    const fileHandles = await window.showOpenFilePicker({ ...pickerOpts, ...opts })
    for (let item of fileHandles) {
      const file = await item.getFile()
      const dataURL = await readAsDataURL(file)
      fileList.push({ dataURL, file })
    }
    return fileList
  } catch (e) {
    return Promise.reject(e)
  }
}

export default getFile
