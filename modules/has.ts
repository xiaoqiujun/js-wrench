import {hasOwnProperty} from './init';
import isObj from './isObj';
/**
 * @description 判断属性是否存在
 * @param obj any
 * @param v string
 * @return boolean
 */
export default (obj:any, v:string):boolean => {
    if(!isObj(obj)) return false;
    return hasOwnProperty.call(obj, v);
}