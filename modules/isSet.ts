import { toString } from './init'

/**
 * @description 是否Set
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isSet() => true|false
 */
const isSet = (v: any): boolean => {
	return toString.call(v) === '[object Set]'
}
export default isSet
