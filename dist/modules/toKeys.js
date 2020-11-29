import isObj from './isObj';
/**
 * @description 返回object自身可枚举属性
 *
 * @param {*} obj
 * @return {*}  {Array<string>}
 * @example toKeys({a:1,b:2}) => ["a", "b"]
 */
var toKeys = function (obj) {
    if (!isObj(obj))
        return [];
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys;
};
export default toKeys;
