import isArray from './isArray';
/**
 * @description 对象深拷贝
 *
 * @param {*} obj
 * @param {Array<any>} [cache=[]]
 * @return {*}  {*}
 * @example deepCopy({age:12}, [])
 */
var deepCopy = function (obj, cache) {
    if (cache === void 0) { cache = []; }
    if (obj === null || typeof obj !== 'object')
        return obj;
    var hit = cache.filter(function (c) {
        return c.original === obj;
    })[0];
    if (hit)
        return hit.copy;
    var copy = isArray(obj) ? [] : {};
    cache.push({
        original: obj,
        copy: copy,
    });
    Object.keys(obj).forEach(function (key) {
        copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
};
export default deepCopy;
