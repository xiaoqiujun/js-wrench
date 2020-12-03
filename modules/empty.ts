import isObj from './isObj';
import isArray from './isArray';
import toKeys from './toKeys';
import isNull from './isNull';
import isUndefined from './isUndefined';
import isString from './isString';
/**
 * @description 判断是否为空 {}|""|[]|null|undefined
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example empty("") => true empty(null) => true empty(undefined) => true empty({}) => true empty([]) => true empty(0) => false
 */
const empty = (v:any):boolean => {
    if(isObj(v) || isArray(v)) return toKeys(v).length === 0
    if(isNull(v) || isUndefined(v)) return true;
    if(isString(v)) return v === "";
    return false
}
export default empty;