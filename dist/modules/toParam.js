import toKeys from './toKeys';
import isObj from './isObj';
/**
 * @description 将object对象转成url参数
 *
 * @param {*} obj
 * @return {*}  {string}
 * @example a=1&b=2&c=3
 */
var toParam = function (obj) {
    if (!isObj(obj))
        return '';
    var keys = toKeys(obj);
    var param = '';
    keys.forEach(function (key, i) {
        if (i < keys.length - 1)
            param += key + "=" + obj[key] + "&";
        else
            param += key + "=" + obj[key];
    });
    return param;
};
export default toParam;
