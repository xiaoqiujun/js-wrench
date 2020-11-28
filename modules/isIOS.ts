/**
 * @description 是否IOS
 * @return boolean 返回一个boolean值
 * @example isIOS() => false|true
 */
export default (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	if (userAgentInfo.indexOf('iPhone') > -1) {
		return true
	}
	return false
}
