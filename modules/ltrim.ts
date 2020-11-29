/**
 * @description 对字符串左边去空格
 *
 * @param {string} str
 * @return {*}  {string}
 * @example ltrim(" abc ") => "abc "
 */
const ltrim = (str: string): string => {
	let reg: RegExp = /^\s*/
	return str.replace(reg, '')
}
export default ltrim
