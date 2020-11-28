/**
 * @description 对字符串两边去空格
 * @param str string 一个字符串类型
 * @return string 返回一个字符串类型
 */

export default (str: string): string => {
    let reg: RegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    return str.replace(reg, "");
}