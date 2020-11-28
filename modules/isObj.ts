import {toString} from './init';

/**
 * @description 判断是否Object
 * @param v any
 * @return boolean
 */
export default (v:any):boolean => {
    return toString.call(v) === "[object Object]";
}