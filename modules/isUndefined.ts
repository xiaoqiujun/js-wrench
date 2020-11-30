import { toString } from './init'

/**
 * @description 是否 undefined
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isUndefined(null) => false
 */
const isUndefined = (v: any): boolean => {
	return toString.call(v) === '[object Undefined]'
}
export default isUndefined
