import { toString } from './init';
/**
 * @description 判断是否Object
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isObj({}) => true
 */
var isObj = function (v) {
    return toString.call(v) === '[object Object]';
};
export default isObj;
