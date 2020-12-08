/**
 * @description 删除数组元素
 *
 * @param {Array<any>} arr  需要操作的数组
 * @param {(Function|number)} iteratee 回调
 * @return {*}  {Array<any>} 返回新的数组 注意并不是原数组的引用
 * @example remove([1,2,3], (v, i, arr) => v === 1) => [2,3];
 */
declare const remove: (arr: Array<any>, iteratee: Function | number) => Array<any>;
export default remove;
