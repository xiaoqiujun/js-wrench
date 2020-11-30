import { toString } from './init';
/**
 * @description 是否Null
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isNull(null) => true
 */
const isNull = (v) => {
    return toString.call(v) === '[object Null]';
};
export default isNull;
