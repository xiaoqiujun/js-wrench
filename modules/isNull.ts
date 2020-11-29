import { toString } from './init'

/**
 * @description 是否Null
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isNull(null) => true
 */
const isNull = (v: any): boolean => {
	return toString.call(v) === '[object Null]'
}
export default isNull
