import { toString } from './init';
/**
 * @description 是否Promise
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isPromise() => true|false
 */
var isPromise = function (v) {
    return toString.call(v) === '[object Promise]';
};
export default isPromise;
