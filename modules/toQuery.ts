/**
 * @description 对url做简单解析成object
 * @param url {string} url地址 注意:对url参数不做正则判断
 * @example urlParse("http:127.0.0.1:8080?type=1&id=123&name=zhangsan") => {url: "http:127.0.0.1:8080", type: "1", id: "123", name: "zhangsan"}
 */
export default (url: string): any => {
	let urlObj: any = {}
	let split: Array<string> = url.split('?')
	if (split.length === 1) return split[0]
	if (split.length === 2) {
		urlObj['url'] = split[0]
		let param: Array<string> = split[1].split('&')
		if (param.length > 1) {
			for (let i: number = 0; i < param.length; i++) {
				let _param: Array<string> = param[i].split('=')
				if (_param.length === 2) {
					urlObj[_param[0]] = _param[1]
				}
			}
		}
	}
	return urlObj
}
