/**
 * @description 是否NaN
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isNaN(NaN) => true
 */
const isNaN = (v) => {
    return isNaN(v) && Number.isNaN(v);
};
export default isNaN;
