import isArray from './isArray'
import isNumber from './isNumber'
import isString from './isString'
/**
 *@description 将字符串, 数字或者数组进行反序输出
 *
 * @param {*} v 要返回其自身反序的操作
 * @return {*}  {(Array<any> | string | number | null)} 返回一个数组,或字符串,数字
 * @example reverse("abcdef") => "fedcba"
 */
const reverse = (v: any): Array<any> | string | number | null => {
	if (isArray(v)) {
		return v.reverse() //如果是数组默认使用reverse
	} else if (isNumber(v) || isString(v)) {
		let arr: Array<any> = ('' + v).split('')
		let result: string | number = ''
		for (let i: number = arr.length - 1; i >= 0; i--) {
			result += arr[i]
		}
		return isNumber(v) ? Number(result) : result
	}
	return null
}
export default reverse
