import { toString } from './init';
/**
 * @description 是否函数
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isFn(function(){}) => true
 */
var isFn = function (v) {
    return toString.call(v) === '[object Function]';
};
export default isFn;
