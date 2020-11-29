import { toString } from './init';
/**
 * @description 是否Symbol
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isSymbol() => false|true
 */
var isSymbol = function (v) {
    return toString.call(v) === '[object Symbol]';
};
export default isSymbol;
