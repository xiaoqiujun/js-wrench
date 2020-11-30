/**
 * @description 将object对象转成url参数
 *
 * @param {*} obj 需要被转化Url参数的对象
 * @return {*}  {string} 返回一个不包含 ? 的Url参数的字符串
 * @example a=1&b=2&c=3
 */
declare const toParam: (obj: any) => string;
export default toParam;
