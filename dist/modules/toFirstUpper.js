import ltrim from './ltrim';
import toUpperCase from './toUpperCase';
/**
 * @description 首字母大写
 *
 * @param {string} str 传入一个字符串
 * @return {*}  {string} 返回一个新的首字母大写的字符串
 * @example toFirstUpper("abc") => Abc toFirstUpper("ABC") => ABC
 */
const toFirstUpper = (str) => {
    str = ltrim(str); //去掉左边的空格
    return toUpperCase(str.slice(0, 1)) + str.slice(1);
};
export default toFirstUpper;
