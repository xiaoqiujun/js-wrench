/**
 * @description 是否Android
 * @return boolean 返回一个boolean值
 * @example isAndroid() => false|true
 */
export default (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	if (
		userAgentInfo.indexOf('Android') > -1 ||
		userAgentInfo.indexOf('Linux') > -1
	) {
		return true
	}
	return false
}
