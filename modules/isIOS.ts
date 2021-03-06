/**
 * @description 是否IOS
 *
 * @return {*}  {boolean} 返回一个布尔值
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
