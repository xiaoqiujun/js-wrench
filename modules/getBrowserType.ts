type browserType =
	| 'IE7'
	| 'IE8'
	| 'IE9'
	| 'IE10'
	| 'IE11'
	| 'Edge'
	| 'FireFox'
	| 'Opera'
	| 'Chrome'
	| 'Safari'
	| '[版本过低]'
	| ''
/**
 * @description 获取浏览器类型
 * @return {*}  {string}
 */
const getBrowserType = (): browserType => {
	let types: browserType = ''
	let userAgentInfo: string = navigator.userAgent
	let isOpera: boolean = userAgentInfo.indexOf('Opera') > -1
	let isIE: boolean =
		userAgentInfo.indexOf('compatible') > -1 &&
		userAgentInfo.indexOf('MSIE') > -1 &&
		!isOpera
	let isIE11: boolean =
		userAgentInfo.indexOf('Trident') > -1 &&
		userAgentInfo.indexOf('rv:11.0') > -1
	let isEdge: boolean = userAgentInfo.indexOf('Edge') > -1 && !isIE
	let isFireFox: boolean = userAgentInfo.indexOf('Firefox') > -1
	let isSafari: boolean =
		userAgentInfo.indexOf('Safari') > -1 &&
		userAgentInfo.indexOf('Chrome') === -1
	let isChrome: boolean =
		userAgentInfo.indexOf('Chrome') > -1 &&
		userAgentInfo.indexOf('Safari') > -1

	if (isIE) {
		let regIE: RegExp = new RegExp('MSIE (\\d+\\.\\d+);')
		regIE.test(userAgentInfo)
		let version: number = parseFloat(RegExp['$1'])
		if (version == 7) types = 'IE7'
		else if (version == 8) types = 'IE8'
		else if (version == 9) types = 'IE9'
		else if (version == 10) types = 'IE10'
		else types = '[版本过低]'
	}
	if (isIE11) types = 'IE11'
	if (isEdge) types = 'Edge'
	if (isFireFox) types = 'FireFox'
	if (isOpera) types = 'Opera'
	if (isSafari) types = 'Safari'
	if (isChrome) types = 'Chrome'
	return types
}

export default getBrowserType
