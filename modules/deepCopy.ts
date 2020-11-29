import isArray from './isArray'
/**
 * @description 对象深拷贝
 *
 * @param {*} obj
 * @param {Array<any>} [cache=[]]
 * @return {*}  {*}
 * @example deepCopy({age:12}, [])
 */
const deepCopy = (obj: any, cache: Array<any> = []): any => {
	if (obj === null || typeof obj !== 'object') return obj
	let hit: any = cache.filter(function (c) {
		return c.original === obj
	})[0]
	if (hit) return hit.copy
	let copy: any = isArray(obj) ? [] : {}
	cache.push({
		original: obj,
		copy,
	})
	Object.keys(obj).forEach((key) => {
		copy[key] = deepCopy(obj[key], cache)
	})
	return copy
}
export default deepCopy
