declare module 'utils/storage' {
  type StorageType = Window['localStorage'] | Window['sessionStorage']
  type value = Object | String
  export type getItem = (target: StorageType, name: string, defaultVal: value) => any
  export type setItem = (target: StorageType, name: string, val: value) => any
  export interface collect {
    getItem(name: string, defaultVal: value): any
    setItem(name: string, val: value): any
  }
  export interface Storage {
    getItem: getItem
    setItem: setItem
    local: collect
    session: collect
  }
  export const local: collect
  export const session: collect
  const storage: Storage
  export default storage
}
