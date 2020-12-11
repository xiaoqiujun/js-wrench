/**
 * @description 把一个对象上的属性拷贝到另个对象上
 *
 * @param {*} thisArgs 拷贝对象
 * @param {*} target 需要被拷贝的对象
 * @example extend({a:1}, {b:1})
 */
declare const extend: (thisArgs: any, target: any) => void;
export default extend;
