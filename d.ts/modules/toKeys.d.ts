/**
 * @description 返回object自身可枚举属性
 *
 * @param {*} obj
 * @return {*}  {Array<string>}
 * @example toKeys({a:1,b:2}) => ["a", "b"]
 */
declare const toKeys: (obj: any) => Array<string>;
export default toKeys;
