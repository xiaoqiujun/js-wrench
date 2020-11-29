import ltrim from './ltrim';
import toUpperCase from './toUpperCase';
/**
 * @description 首字母大写
 *
 * @param {string} str
 * @return {*}  {string}
 * @example toFirstUpper("abc") => Abc toFirstUpper("ABC") => ABC
 */
var toFirstUpper = function (str) {
    str = ltrim(str); //去掉左边的空格
    return toUpperCase(str.slice(0, 1)) + str.slice(1);
};
export default toFirstUpper;
