import isArray from './isArray';
import isString from './isString';
import isObj from './isObj';
import toKeys from './toKeys';
import isFn from './isFn';
import noop from './noop';
/**
 * @description 迭代器
 *
 * @param {*} collection
 * @param {Function} iteratee
 */
const each = (collection, iteratee) => {
    if (!isFn(iteratee))
        iteratee = noop;
    let result = [];
    if (isString(collection))
        result = collection.split(",");
    else if (isObj(collection))
        result = toKeys(collection);
    else if (isArray(collection))
        result = collection;
    else
        return null;
    let length = result.length;
    let index = 0;
    while (index < length) {
        if (isObj(collection)) {
            iteratee(collection[result[index]], result[index], collection);
        }
        else {
            iteratee(result[index], index, collection);
        }
        index++;
    }
};
export default each;