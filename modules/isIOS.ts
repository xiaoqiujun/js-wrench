/**
 * @description 是否IOS
 *
 * @return {*}  {boolean}
 * @example isIOS() => false|true
 */
const isIOS = (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	if (userAgentInfo.indexOf('iPhone') > -1) {
		return true
	}
	return false
}
export default isIOS
