import {toString} from './init';

/**
 * @description 是否boolean
 * @param v any
 * @return boolean
 */
export default (v:any):boolean => {
    return toString.call(v) === "[object Boolean]";
}