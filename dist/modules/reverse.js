import isArray from './isArray';
import isNumber from './isNumber';
import isString from './isString';
/**
 *@description 将字符串，数字或者数组进行反序输出
 *
 * @param {*} v
 * @return {*}  {(Array<any> | string | number | null)}
 * @example reverse("abcdef") => "fedcba"
 */
var reverse = function (v) {
    if (isArray(v)) {
        return v.reverse(); //如果是数组默认使用reverse
    }
    else if (isNumber(v) || isString(v)) {
        var arr = ('' + v).split('');
        var result = '';
        for (var i = arr.length - 1; i >= 0; i--) {
            result += arr[i];
        }
        return isNumber(v) ? Number(result) : result;
    }
    return null;
};
export default reverse;
