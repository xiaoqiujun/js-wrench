import {toString} from './init';

/**
 * @description 是否Symbol
 * @param v any
 * @return boolean
 */
export default (v:any):boolean => {
    return toString.call(v) === "[object Symbol]";
}