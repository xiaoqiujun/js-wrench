/**
 * @description 是否NaN
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isNaN(NaN) => true
 */
var isNaN = function (v) {
    return isNaN(v) && Number.isNaN(v);
};
export default isNaN;
