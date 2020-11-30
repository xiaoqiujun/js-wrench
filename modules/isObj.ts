import { toString } from './init'

/**
 * @description 判断是否Object
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isObj({}) => true
 */
const isObj = (v: any): boolean => {
	return toString.call(v) === '[object Object]'
}
export default isObj
