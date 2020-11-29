/**
 * @description 对字符串左边去空格
 *
 * @param {string} str
 * @return {*}  {string}
 * @example rtrim(" bac ") => " bac"
 */
const rtrim = (str: string): string => {
	let reg: RegExp = /\s*$/
	return str.replace(reg, '')
}
export default rtrim
