/**
 *@description 是否WPhone
 *
 * @return {*}  {boolean}
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
