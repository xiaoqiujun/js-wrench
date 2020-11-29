import { toString } from './init';
/**
 * @description 是否Map
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isMap(new Map()) => true
 */
var isMap = function (v) {
    return toString.call(v) === '[object Map]';
};
export default isMap;
