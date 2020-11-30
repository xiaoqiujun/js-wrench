import { toString } from './init'

/**
 * @description 是否Map
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isMap(new Map()) => true
 */
const isMap = (v: any): boolean => {
	return toString.call(v) === '[object Map]'
}
export default isMap
