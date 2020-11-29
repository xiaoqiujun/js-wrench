import { toString } from './init';
/**
 * @description 是否日期
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isDate("123") => false
 */
var isDate = function (v) {
    return toString.call(v) === '[object Date]';
};
export default isDate;
