/**
 * @description 获取随机验证码
 *
 * @param {number} [len=4] 默认长度是4位
 * @return {*}  {string} 返回一个[len]长度的随机字符串
 * @example getVerifyCode(4) => 4sGa
 */
declare const getVerifyCode: (len?: number) => string;
export default getVerifyCode;
