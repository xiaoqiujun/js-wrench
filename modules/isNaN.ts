/**
 * @description 是否NaN
 *
 * @param {*} v
 * @return {*}  {boolean}
 * @example isNaN(NaN) => true
 */
const isNaN = (v: any): boolean => {
	return isNaN(v) && Number.isNaN(v)
}
export default isNaN
