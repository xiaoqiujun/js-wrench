/**
 * @description 对字符串左边去空格
 *
 * @param {string} str
 * @return {*}  {string}
 * @example rtrim(" bac ") => " bac"
 */
var rtrim = function (str) {
    var reg = /\s*$/;
    return str.replace(reg, '');
};
export default rtrim;
