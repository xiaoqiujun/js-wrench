import isObj from './isObj';
import indexOf from './indexOf';
/**
 * @description 判断一个数组里或者字符串是否包含一个指定的值
 *
 * @param {(any[] | string)} data 需要查找的数组或者字符串
 * @param {never} ele 指定的值, 可以是数字,字符串,对象
 * @param {(number | undefined)} [fromIndex] 从指定位置开始查找 可选
 * @return {*}  {boolean} 返回一个布尔值
 * @example includes([1,2,3], 1) => true
 */
const includes = (data, ele, fromIndex) => {
    let index = fromIndex || 0;
    let i = Math.max(index >= 0 ? index : data.length - Math.abs(fromIndex), 0);
    while (i < data.length) {
        if (isObj(ele)) {
            return indexOf(data, ele, fromIndex) !== -1;
        }
        else {
            if ('' + data[i] === '' + ele) {
                return true;
            }
        }
        i++;
    }
    return false;
};
export default includes;
