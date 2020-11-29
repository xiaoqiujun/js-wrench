import { toString } from './init'

/**
 * @description 是否数字
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isNumber(12) => true
 */
const isNumber = (v: any): boolean => {
	return toString.call(v) === '[object Number]'
}
export default isNumber
