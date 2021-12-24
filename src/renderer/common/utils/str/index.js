export function getRandom(random = 0, sign = '-') {
  return [Date.now().toString(), Math.random().toString(16).slice(2, 10), Math.random().toString(16).slice(7), random.toString()].join(sign)
}
export function getRandomStr(len) {
  len = len || 32
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
export default {
  getRandom,
  getRandomStr,
}
