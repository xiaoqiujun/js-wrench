import { toString } from './init';
/**
 * @description 判断是否数组
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isArray([]) => true
 */
var isArray = function (v) {
    return v.constructor === Array && toString.call(v) === '[object Array]';
};
export default isArray;
