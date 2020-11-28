import {toString} from './init';

/**
 * @description 是否函数
 * @param v any
 * @return boolean
 */
export default (v:any):boolean => {
    return toString.call(v) === "[object Function]";
}