import { toString } from './init'

/**
 * @description 判断是否数组
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isArray([]) => true
 */
const isArray = (v: any): boolean => {
	return v.constructor === Array && toString.call(v) === '[object Array]'
}
export default isArray
