import isObj from './isObj';
/**
 * @description 返回object自身可枚举属性值
 *
 * @param {*} obj
 * @return {*}  {Array<any>}
 * @example toValues({a:1,b:2}) => [1, 2]
 */
var toValues = function (obj) {
    if (!isObj(obj))
        return [];
    var values = [];
    for (var key in obj) {
        values.push(obj[key]);
    }
    return values;
};
export default toValues;
