import {toString} from './init';

/**
 * @description 是否日期
 * @param v any
 * @return boolean
 */
export default (v:any):boolean => {
    return toString.call(v) === "[object Date]";
}