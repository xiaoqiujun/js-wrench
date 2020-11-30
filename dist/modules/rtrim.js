/**
 * @description 对字符串右边去空格
 *
 * @param {string} str 传入一个字符串
 * @return {*}  {string} 返回一个右边没有空格的新的字符串
 * @example rtrim(" bac ") => " bac"
 */
const rtrim = (str) => {
    let reg = /\s*$/;
    return str.replace(reg, '');
};
export default rtrim;
