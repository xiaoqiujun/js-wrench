import { toString } from './init';
/**
 * @description 是否Null
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isNull(null) => true
 */
var isNull = function (v) {
    return toString.call(v) === '[object Null]';
};
export default isNull;
