/**
 * @description 判断一个数组里或者字符串是否包含一个指定的值
 *
 * @param {any[]} arr
 * @param {never} ele
 * @param {(number | undefined)} [fromIndex]
 * @return {*}  {boolean}
 * @example includes([1,2,3], 1) => true
 */
declare const includes: (arr: any[], ele: never, fromIndex?: number | undefined) => boolean;
export default includes;
