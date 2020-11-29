/**
 * @description indexOf 从头到尾地检索 如果有返回索引值
 *
 * @param {[]} arr
 * @param {never} ele
 * @param {(number | undefined)} fromIndex
 * @return {*}  {number}
 * @example indexOf([1,2,3], 1) => 0
 */
const indexOf = (
	arr: [],
	ele: never,
	fromIndex: number | undefined
): number => {
	let len: number = arr.length
	if (len === 0) return -1
	let index: number = fromIndex || 0
	let i: number = Math.max(
		index >= 0 ? index : arr.length - Math.abs(fromIndex as number),
		0
	)

	while (i < len) {
		if (i in arr && arr[i] === ele) return i
		i++
	}
	return -1
}
export default indexOf
