import toKeys from './toKeys'
import isObj from './isObj'
/**
 * @description 将object对象转成url参数
 *
 * @param {*} obj 需要被转化Url参数的对象
 * @return {*}  {string} 返回一个不包含 ? 的Url参数的字符串
 * @example a=1&b=2&c=3
 */
const toParam = (obj: any): string => {
	if (!isObj(obj)) return ''
	const keys: string[] = toKeys(obj)
	let param: string = ''
	keys.forEach((key: string, i: number) => {
		if (i < keys.length - 1) param += `${key}=${obj[key]}&`
		else param += `${key}=${obj[key]}`
	})
	return param
}

export default toParam
