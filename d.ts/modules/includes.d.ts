/**
 * @description 判断一个数组里或者字符串是否包含一个指定的值
 *
 * @param {(any[] | string)} data 需要查找的数组或者字符串
 * @param {never} ele 指定的值, 可以是数字,字符串,对象
 * @param {(number | undefined)} [fromIndex] 从指定位置开始查找 默认undefined
 * @return {*}  {boolean} 返回一个布尔值
 * @example includes([1,2,3], 1) => true
 */
declare const includes: (data: any[] | string, ele: never, fromIndex?: number | undefined) => boolean;
export default includes;
