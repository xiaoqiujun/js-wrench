import { toString } from './init'

/**
 * @description 是否字符串
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isString("12") => true
 */
const isString = (v: any): boolean => {
	return toString.call(v) === '[object String]'
}
export default isString
