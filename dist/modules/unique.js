import typeOf from './typeOf';
import includes from './includes';
import trim from './trim';
import isArray from './isArray';
import isString from './isString';
import isNumber from './isNumber';
/**
 * @description 对数组去重 只对string[]|number[]去重 不使用new Set()
 *
 * @param {(Array<string | number>)} arr 需要去重的数组
 * @return {*}  {(Array<string | number>)} 返回一个没有重复数据的数组
 * @example uniqueToArray([1,2,3,3,2]) => [1,2,3]
 */
const uniqueToArray = (arr) => {
    arr = arr.filter(Boolean);
    let newArr = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = true;
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
/**
 * @description 对多种类型或者混合数组去重
 *
 * @param {Array<any>} arr 需要去重的数组
 * @return {*}  {Array<any>} 返回一个没有重复数据的数组
 * @example  uniqueToSizzArray([{age:12},{age:13}]) uniqueToSizzArray(["a","b","b"])
 */
const uniqueToSizzArray = (arr) => {
    arr = arr.filter(Boolean);
    let newArr = [];
    let newObjArr = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (typeOf(item, "object")) {
            if (!includes(newObjArr, item))
                newObjArr.push(item);
        }
        else {
            if (!obj[item]) {
                obj[item] = true;
                newArr.push(item);
            }
        }
    }
    return newArr.concat(newObjArr);
};
/**
 * @description 对字符串去重
 *
 * @param {string} str 需要去重的字符串
 * @return {*}  {string} 返回新的字符串
 * @example uniqueToSttring("abcbbbc") => abc
 */
const uniqueToSttring = (str) => {
    str = trim(str); //先对其去空格
    let newStr = "";
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            newStr += str[i];
            obj[str[i]] = true;
        }
    }
    return newStr;
};
/**
 * @description 对数字去重
 *
 * @param {number} num 需要去重的数字
 * @return {*}  {number} 返回没有重复的数字
 * @example uniqueToNumber(111123) => 123
 */
const uniqueToNumber = (num) => {
    let str = "" + num; //对数字转字符串
    return Number(uniqueToSttring(str));
};
/**
 * @description 对一个集合去重
 *
 * @param {*} data 任意值
 * @return {*}  {*} 返回没有重复的数据
 * @example unique([1,2,3,3]) => [1,2,3] unique([{age:1}, {age:2}, {age:1}]) => [{age:1}, {age:2}]
 */
const unique = (data) => {
    if (isArray(data))
        return uniqueToSizzArray(data);
    else if (isString(data))
        return uniqueToSttring(data);
    else if (isNumber(data))
        return uniqueToNumber(data);
    return null;
};
export default unique;
