/**
 * @description 是否NaN
 * @returns boolean
 */
export default (v: any): boolean => {
	return isNaN(v) && Number.isNaN(v)
}
