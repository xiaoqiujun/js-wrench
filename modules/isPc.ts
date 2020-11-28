/**
 * @description 是否PC端
 * @return boolean
 */
export default (): boolean => {
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
