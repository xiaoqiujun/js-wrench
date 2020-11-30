/**
 * @description 对字符串两边去空格
 *
 * @param {string} str 需要去空格的字符串
 * @return {*}  {string} 返回没有空格的字符串
 * @example trim(" bac ") => "bac"
 */
const trim = (str: string): string => {
	let reg: RegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
	return str.replace(reg, '')
}
export default trim
