/**
 *@description 是否WPhone设备
 *
 * @return {*}  {boolean} 返回一个布尔值
 * @example isWPhone() => false|true
 */
const isWPhone = (): boolean => {
	let userAgentInfo: string = navigator.userAgent
	if (userAgentInfo.indexOf('Windows Phone') > -1) {
		return true
	}
	return false
}
export default isWPhone
