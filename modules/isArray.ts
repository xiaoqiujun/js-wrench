import {toString} from './init';

/**
 * @description 判断是否数组
 * @param v any
 * @return boolean
 */
export default (v:any):boolean => {
    return v.constructor === Array && toString.call(v) === "[object Array]";
}