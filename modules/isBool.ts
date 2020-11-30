import { toString } from './init'

/**
 * @description 是否boolean
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isBool(true) => true
 */
const isBool = (v: any): boolean => {
	return toString.call(v) === '[object Boolean]'
}
export default isBool
