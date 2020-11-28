import toKeys from './toKeys'
import isObj from './isObj'
/**
 * @description 将object对象转成url参数
 * @param obj Object
 * @returns string
 * @example a=1&b=2&c=3
 */

export default (obj: any): string => {
	if (!isObj(obj)) return ''
	const keys: string[] = toKeys(obj)
	let param: string = ''
	keys.forEach((key: string, i: number) => {
		if (i < keys.length - 1) param += `${key}=${obj[key]}&`
		else param += `${key}=${obj[key]}`
	})
	return param
}
