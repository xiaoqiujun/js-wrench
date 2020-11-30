/**
 * @description 对象深拷贝
 * 来源Vuex https://github.com/vuejs/vuex/blob/dev/src/util.js 解决了循环引用问题
 * 对其深度拷贝进行二次优化, 添加Date其他类型的判断 {time:new Date(), regexp:/\w+/}
 * @param {*} obj 要进行拷贝的源数据
 * @param {Array<any>} [cache=[]] 利用数组存储已经拷贝过的数据, 每次拷贝会从cache中查询有没有拷贝过
 * @return {*}  {*} 返回拷贝的数据
 * @example deepCopy({age:12, time:new Date(), regexp:/\w+/, fn:function(){}}, [])
 */
declare const deepCopy: (obj: any, cache?: Array<any>) => any;
export default deepCopy;
