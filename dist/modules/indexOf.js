import isArray from './isArray';
import isString from './isString';
/**
 * @description indexOf 从头到尾地检索 如果有返回索引值
 *
 * @param {(any[] | string)} data 需要查找的数组或者字符串
 * @param {any} ele 指定的值, 可以是数字,字符串,对象
 * @param {(number | undefined)} [fromIndex] 从指定位置开始查找 默认undefined
 * @return {*}  {number} 返回第一次出现的索引, 如果没有找到, 则返回-1
 * @example indexOf([1,2,3], 1) => 0
 */
const indexOf = (data, ele, fromIndex = 0) => {
    console.log(!isArray(data), !isString(data))
    if (!isArray(data) && !isString(data))
        return -1;
    let len = data.length;
    if (len === 0)
        return -1;
    let index = fromIndex || 0;
    let i = Math.max(index >= 0 ? index : data.length - Math.abs(fromIndex), 0);
    while (i < len) {
        if (data[i] === ele)
            return i;
        i++;
    }
    return -1;
};
export default indexOf;
