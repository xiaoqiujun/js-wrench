import { toString } from './init';
/**
 * @description 是否Set
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isSet() => true|false
 */
var isSet = function (v) {
    return toString.call(v) === '[object Set]';
};
export default isSet;
