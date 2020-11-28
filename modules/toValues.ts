import isObj from './isObj'
/**
 * @description 返回object自身可枚举属性值
 * @param obj {object} 接收一个object数据
 * @returns Array
 */

export default (obj: any): Array<string> => {
	if (!isObj(obj)) return []
	let values: Array<any> = []
	for (let key in obj) {
		values.push(obj[key])
	}
	return values
}
