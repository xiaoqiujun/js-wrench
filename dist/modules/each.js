import isArray from './isArray';
import isObj from './isObj';
import toKeys from './toKeys';
import isFn from './isFn';
import noop from './noop';
/**
 * @description 迭代器
 *
 * @param {*} collection
 * @param {Function} iteratee
 * @example each([1,2,3], (v, i, arr) = {
 *
 *          })
 */
const each = (collection, iteratee) => {
    if (!isFn(iteratee))
        iteratee = noop;
    let result = [];
    if (isObj(collection))
        result = toKeys(collection);
    else if (isArray(collection))
        result = collection;
    else
        result = [collection];
    let length = result.length;
    let index = 0;
    while (index < length) {
        if (isObj(collection)) {
            iteratee.call(null, collection[result[index]], result[index], collection);
        }
        else {
            iteratee.call(null, result[index], index, collection);
        }
        index++;
    }
};
export default each;
