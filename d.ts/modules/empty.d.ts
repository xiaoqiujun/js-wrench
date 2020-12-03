/**
 * @description 判断是否为空 {}|""|[]|null|undefined
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example empty("") => true empty(null) => true empty(undefined) => true empty({}) => true empty([]) => true empty(0) => false
 */
declare const empty: (v: any) => boolean;
export default empty;
