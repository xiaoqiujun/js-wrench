/**
 * @description 对字符串左边去空格
 *
 * @param {string} str 传入一个字符串
 * @return {*}  {string} 返回一个左边没有空格的新的字符串
 * @example ltrim(" abc ") => "abc "
 */
const ltrim = (str) => {
    let reg = /^\s*/;
    return str.replace(reg, '');
};
export default ltrim;
