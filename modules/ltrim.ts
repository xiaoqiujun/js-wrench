/**
 * @description 对字符串左边去空格
 * @param str string 一个字符串类型
 * @return string 返回一个字符串类型
 */

export default (str: string): string => {
    let reg: RegExp = /^\s*/;
    return str.replace(reg, "");
}