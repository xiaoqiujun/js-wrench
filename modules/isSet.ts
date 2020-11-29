import { toString } from './init'

/**
 * @description 是否Set
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isSet() => true|false
 */
const isSet = (v: any): boolean => {
	return toString.call(v) === '[object Set]'
}
export default isSet
