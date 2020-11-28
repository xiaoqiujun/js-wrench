/**
 * @description 是否WPhone
 * @return boolean 返回一个boolean值
 * @example isiPad() => false|true
 */
export default (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	if (userAgentInfo.indexOf('Windows Phone') > -1) {
		return true
	}
	return false
}
