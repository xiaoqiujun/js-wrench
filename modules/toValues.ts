import isObj from './isObj'
/**
 * @description 返回object自身可枚举属性值
 *
 * @param {*} obj
 * @return {*}  {Array<any>}
 * @example toValues({a:1,b:2}) => [1, 2]
 */
const toValues = (obj: any): Array<any> => {
	if (!isObj(obj)) return []
	let values: Array<any> = []
	for (let key in obj) {
		values.push(obj[key])
	}
	return values
}

export default toValues
