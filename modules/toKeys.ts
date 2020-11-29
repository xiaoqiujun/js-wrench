import isObj from './isObj'
/**
 * @description 返回object自身可枚举属性
 *
 * @param {*} obj
 * @return {*}  {Array<string>}
 * @example toKeys({a:1,b:2}) => ["a", "b"]
 */
const toKeys = (obj: any): Array<string> => {
	if (!isObj(obj)) return []
	let keys: Array<string> = []
	for (let key in obj) {
		keys.push(key)
	}
	return keys
}
export default toKeys
