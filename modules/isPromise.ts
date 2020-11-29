import { toString } from './init'

/**
 * @description 是否Promise
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isPromise() => true|false
 */
const isPromise = (v: any): boolean => {
	return toString.call(v) === '[object Promise]'
}
export default isPromise
