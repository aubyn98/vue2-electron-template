declare namespace object {
  type rawTypes =
    | 'Null'
    | 'Undefined'
    | 'Boolean'
    | 'String'
    | 'Number'
    | 'Symbol'
    | 'Object'
    | 'Array'
    | 'Function'
    | 'AsyncFunction'
    | 'ArrayBuffer'
    | 'Date'
    | 'Error'
    | 'Atomics'
    | 'BigInt'
    | 'BigInt64Array'
    | 'BigUint64Array'
    | 'DataView'
    | 'FinalizationRegistry'
    | 'Float32Array'
    | 'Float64Array'
    | 'Generator'
    | 'GeneratorFunction'
    | 'Int16Array'
    | 'Int32Array'
    | 'Int8Array'
    | 'Intl'
    | 'JSON'
    | 'Map'
    | 'Math'
    | 'Promise'
    | 'Reflect'
    | 'RegExp'
    | 'Set'
    | 'SharedArrayBuffer'
    | 'TypedArray'
    | 'Uint16Array'
    | 'Uint32Array'
    | 'Uint8Array'
    | 'Uint8ClampedArray'
    | 'WeakMap'
    | 'WeakRef'
    | 'WeakSet'
    | 'WebAssembly'
  /**
   * 获取数据类型
   * @param val  任意数据
   */
  function getRawType(val: any): rawTypes
}
declare module 'utils/object' {
  export = object
}
