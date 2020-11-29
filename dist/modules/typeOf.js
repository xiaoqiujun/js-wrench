/**
 * @description 判断数据类型
 *
 * @param {*} v
 * @param {Types} t
 * @return {*}  {boolean}
 * @example typeOf(true, "boolean") = true
 */
var typeOf = function (v, t) {
    return typeof v === t;
};
export default typeOf;
