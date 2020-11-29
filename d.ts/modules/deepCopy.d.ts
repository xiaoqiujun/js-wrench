/**
 * @description 对象深拷贝
 *
 * @param {*} obj
 * @param {Array<any>} [cache=[]]
 * @return {*}  {*}
 * @example deepCopy({age:12}, [])
 */
declare const deepCopy: (obj: any, cache?: Array<any>) => any;
export default deepCopy;
