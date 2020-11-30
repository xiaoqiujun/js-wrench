/**
 *@description 将字符串, 数字或者数组进行反序输出
 *
 * @param {*} v 要返回其自身反序的操作
 * @return {*}  {(Array<any> | string | number | null)} 返回一个数组,或字符串,数字
 * @example reverse("abcdef") => "fedcba"
 */
declare const reverse: (v: any) => Array<any> | string | number | null;
export default reverse;
