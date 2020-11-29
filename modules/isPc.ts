/**
 * @description 是否PC端
 *
 * @return {*}  {boolean}
 * @example isPC() => true|false
 */
const isPC = (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	let Agents: Array<string> = [
		'Android',
		'iPhone',
		'SymbianOS',
		'Windows Phone',
		'iPad',
		'iPod',
	]
	let flag: boolean = true
	for (let i: number = 0; i < Agents.length; i++) {
		if (userAgentInfo.indexOf(Agents[i]) > 0) {
			flag = false
			break
		}
	}
	return flag
}
export default isPC
