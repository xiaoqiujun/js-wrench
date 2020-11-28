/**
 * @description 生成唯一的UID
 * @example createUID() => 5d33b0fc-692d-41eb-e703-4aa76ab08f
 * @returns string
 */
export default (): string => {
	let uniqid: string = ''
	let rule: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxx'
	uniqid = rule.replace(/[xy]/g, function (rep: string) {
		let num: number = (16 * Math.random()) | 0
		return ('x' === rep ? num : 3 && num | 8).toString(16)
	})
	return uniqid
}
