/**
 * @description 是否Android
 *
 * @return {*}  {boolean}
 * @example isAndroid() => true|false
 */
const isAndroid = (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	if (
		userAgentInfo.indexOf('Android') > -1 ||
		userAgentInfo.indexOf('Linux') > -1
	) {
		return true
	}
	return false
}

export default isAndroid
