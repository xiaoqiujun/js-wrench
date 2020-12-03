/**
 * @description 对一个集合去重
 *
 * @param {*} data 任意值
 * @return {*}  {*} 返回没有重复的数据
 * @example unique([1,2,3,3]) => [1,2,3] unique([{age:1}, {age:2}, {age:1}]) => [{age:1}, {age:2}]
 */
declare const unique: (data: any) => any;
export default unique;
