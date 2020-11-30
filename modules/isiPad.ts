/**
 * @description 是否iPad
 * 
 * @return {*}  {boolean} 返回一个布尔值
 * @example isiPad() => true|false
 */
const isiPad = (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	if (userAgentInfo.indexOf('iPad') > -1) {
		return true
	}
	return false
}
export default isiPad
