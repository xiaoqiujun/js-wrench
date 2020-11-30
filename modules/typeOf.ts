type Types =
	| 'string'
	| 'number'
	| 'object'
	| 'function'
	| 'boolean'
	| 'undefined'
	| 'symbol'
	| 'bigint'
/**
 * @description 判断数据类型
 *
 * @param {*} v 任意值
 * @param {Types} t 传入类型 'string'| 'number'| 'object'| 'function'| 'boolean'| 'undefined'| 'symbol'| 'bigint'
 * @return {*}  {boolean} 返回一个布尔值
 * @example typeOf(true, "boolean") = true
 */
const typeOf = (v: any, t: Types): boolean => {
	return typeof v === t
}
export default typeOf
