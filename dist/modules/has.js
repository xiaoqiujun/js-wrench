import { hasOwnProperty } from './init';
import isObj from './isObj';
/**
 * @description 判断属性是否存在
 *
 * @param {*} obj
 * @param {string} v
 * @return {*}  {boolean}
 * @example has({a:1}, "a") => true
 */
var has = function (obj, v) {
    if (!isObj(obj))
        return false;
    return hasOwnProperty.call(obj, v);
};
export default has;
