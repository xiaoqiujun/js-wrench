import { toString } from './init';
/**
 * @description 是否boolean
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isBool(true) => true
 */
var isBool = function (v) {
    return toString.call(v) === '[object Boolean]';
};
export default isBool;
