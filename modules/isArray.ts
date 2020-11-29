import { toString } from './init'

/**
 * @description 判断是否数组
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isArray([]) => true
 */
const isArray = (v: any): boolean => {
	return v.constructor === Array && toString.call(v) === '[object Array]'
}
export default isArray
