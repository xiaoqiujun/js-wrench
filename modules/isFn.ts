import { toString } from './init'

/**
 * @description 是否函数
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isFn(function(){}) => true
 */
const isFn = (v: any): boolean => {
	return toString.call(v) === '[object Function]'
}
export default isFn
