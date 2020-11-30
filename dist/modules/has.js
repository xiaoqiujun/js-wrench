import { hasOwnProperty } from './init';
import isObj from './isObj';
/**
 * @description 判断属性是否存在
 *
 * @param {*} obj 任意类型, 不是obejct返回false
 * @param {string} v 需要查找的属性名
 * @return {*}  {boolean} 返回一个布尔值
 * @example has({a:1}, "a") => true
 */
const has = (obj, v) => {
    if (!isObj(obj))
        return false;
    return hasOwnProperty.call(obj, v);
};
export default has;
