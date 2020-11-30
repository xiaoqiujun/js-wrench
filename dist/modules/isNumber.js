import { toString } from './init';
/**
 * @description 是否数字
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isNumber(12) => true
 */
const isNumber = (v) => {
    return toString.call(v) === '[object Number]';
};
export default isNumber;
