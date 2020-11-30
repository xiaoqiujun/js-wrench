import { toString } from './init';
/**
 * @description 是否Symbol
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isSymbol() => false|true
 */
const isSymbol = (v) => {
    return toString.call(v) === '[object Symbol]';
};
export default isSymbol;
