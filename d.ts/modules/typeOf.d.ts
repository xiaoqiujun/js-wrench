declare type Types = 'string' | 'number' | 'object' | 'function' | 'boolean' | 'undefined' | 'symbol' | 'bigint';
/**
 * @description 判断数据类型
 *
 * @param {*} v
 * @param {Types} t
 * @return {*}  {boolean}
 * @example typeOf(true, "boolean") = true
 */
declare const typeOf: (v: any, t: Types) => boolean;
export default typeOf;
