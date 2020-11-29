import { toString } from './init';
/**
 * @description 是否 undefined
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isUndefined(null) => false
 */
var isUndefined = function (v) {
    return toString.call(v) === '[object Undefined]';
};
export default isUndefined;
