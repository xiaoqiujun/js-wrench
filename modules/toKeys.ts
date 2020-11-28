import isObj from './isObj'
/**
 * @description 返回object自身可枚举属性
 * @param obj {object} 接收一个object数据
 * @returns Array
 */
export default (obj: any): Array<string> => {
	if (!isObj(obj)) return []
	let keys: Array<string> = []
	for (let key in obj) {
		keys.push(key)
	}
	return keys
}
