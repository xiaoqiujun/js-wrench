import {toString} from './init';

/**
 * @description 是否Set
 * @param v any
 * @return boolean
 */
export default (v:any):boolean => {
    return toString.call(v) === "[object Set]";
}