/**
 * @description indexOf 从头到尾地检索 如果有返回索引值
 *
 * @param {(any[] | string)} data 需要查找的数组或者字符串
 * @param {any} ele 指定的值, 可以是数字,字符串,对象
 * @param {(number | undefined)} [fromIndex] 从指定位置开始查找 默认undefined
 * @return {*}  {number} 返回第一次出现的索引, 如果没有找到, 则返回-1
 * @example indexOf([1,2,3], 1) => 0
 */
declare const indexOf: (data: any[] | string, ele: any, fromIndex?: number) => number;
export default indexOf;
