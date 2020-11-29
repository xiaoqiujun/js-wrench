import { toString } from './init'

/**
 * @description 判断是否Object
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isObj({}) => true
 */
const isObj = (v: any): boolean => {
	return toString.call(v) === '[object Object]'
}
export default isObj
