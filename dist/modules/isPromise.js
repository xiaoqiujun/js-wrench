import isFn from './isFn';
/**
 * @description 是否Promise
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example isPromise() => true|false
 */
const isPromise = (v) => {
    return v && isFn(v.then);
};
export default isPromise;
