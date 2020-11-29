import { toString } from './init'

/**
 * @description 是否Symbol
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isSymbol() => false|true
 */
const isSymbol = (v: any): boolean => {
	return toString.call(v) === '[object Symbol]'
}
export default isSymbol
