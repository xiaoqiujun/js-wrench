/**
 * @description 是否iPad
 * @return boolean 返回一个boolean值
 * @example isiPad() => false|true
 */
export default (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	if (userAgentInfo.indexOf('iPad') > -1) {
		return true
	}
	return false
}
