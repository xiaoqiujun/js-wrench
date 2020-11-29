/**
 * @description 对字符串左边去空格
 *
 * @param {string} str
 * @return {*}  {string}
 * @example ltrim(" abc ") => "abc "
 */
var ltrim = function (str) {
    var reg = /^\s*/;
    return str.replace(reg, '');
};
export default ltrim;
