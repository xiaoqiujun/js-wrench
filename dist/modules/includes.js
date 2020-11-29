import isArray from './isArray';
import { arrayProto } from './init';
import isFn from './isFn';
/**
 * @description 判断一个数组里或者字符串是否包含一个指定的值
 *
 * @param {any[]} arr
 * @param {never} ele
 * @param {(number | undefined)} [fromIndex]
 * @return {*}  {boolean}
 * @example includes([1,2,3], 1) => true
 */
var includes = function (arr, ele, fromIndex) {
    if (!isArray(arr))
        return false;
    if (isFn(arrayProto.includes)) {
        return arr.includes(ele, fromIndex);
    }
    var index = fromIndex || 0;
    var i = Math.max(index >= 0 ? index : arr.length - Math.abs(fromIndex), 0);
    while (i < arr.length) {
        if ('' + arr[i] === '' + ele) {
            return true;
        }
        i++;
    }
    return false;
};
export default includes;
