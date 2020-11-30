import { toString } from './init'

/**
 * @description 是否日期
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isDate("123") => false
 */
const isDate = (v: any): boolean => {
	return toString.call(v) === '[object Date]'
}
export default isDate
