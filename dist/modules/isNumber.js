import { toString } from './init';
/**
 * @description 是否数字
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isNumber(12) => true
 */
var isNumber = function (v) {
    return toString.call(v) === '[object Number]';
};
export default isNumber;
