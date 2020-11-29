/**
 * @description 返回object自身可枚举属性值
 *
 * @param {*} obj
 * @return {*}  {Array<any>}
 * @example toValues({a:1,b:2}) => [1, 2]
 */
declare const toValues: (obj: any) => Array<any>;
export default toValues;
