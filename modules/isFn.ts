import { toString } from './init'

/**
 * @description 是否函数
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isFn(function(){}) => true
 */
const isFn = (v: any): boolean => {
	return toString.call(v) === '[object Function]'
}
export default isFn
