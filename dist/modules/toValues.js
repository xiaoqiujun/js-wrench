import isObj from './isObj';
/**
 * @description 返回object自身可枚举属性值
 *
 * @param {*} obj 要返回可枚举属性值的对象
 * @return {*}  {Array<any>} 返回一个给定对象自身的所有可枚举属性值的数组
 * @example toValues({a:1,b:2}) => [1, 2]
 */
const toValues = (obj) => {
    if (!isObj(obj))
        return [];
    let values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
};
export default toValues;
