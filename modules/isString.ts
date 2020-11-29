import { toString } from './init'

/**
 * @description 是否字符串
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isString("12") => true
 */
const isString = (v: any): boolean => {
	return toString.call(v) === '[object String]'
}
export default isString
