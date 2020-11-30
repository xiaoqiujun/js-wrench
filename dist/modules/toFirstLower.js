import ltrim from './ltrim';
import toLowerCase from './toLowerCase';
/**
 * @description 首字母小写
 *
 * @param {string} str 传入一个字符串
 * @return {*}  {string} 返回一个新的首字母小写的字符串
 * @example toFirstUpper("abc") => abc toFirstUpper("ABC") => aBC
 */
const toFirstLower = (str) => {
    str = ltrim(str); //去掉左边的空格
    return toLowerCase(str.slice(0, 1)) + str.slice(1);
};
export default toFirstLower;
