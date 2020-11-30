/**
 * @description 返回object自身可枚举属性
 *
 * @param {*} obj 要返回可枚举属性的对象
 * @return {*}  {Array<string>} 返回一个给定对象自身的所有可枚举属性的数组
 * @example toKeys({a:1,b:2}) => ["a", "b"]
 */
declare const toKeys: (obj: any) => Array<string>;
export default toKeys;
