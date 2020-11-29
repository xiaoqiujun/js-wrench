/**
 * @description 对字符串两边去空格
 *
 * @param {string} str
 * @return {*}  {string}
 * @example trim(" bac ") => "bac"
 */
const trim = (str: string): string => {
	let reg: RegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
	return str.replace(reg, '')
}
export default trim
