import isArray from './isArray'
import isString from './isString'
import isObj from './isObj';
import toKeys from './toKeys';
import has from './has';
import isPrimitive from './isPrimitive';
/**
 * @description indexOf 从头到尾地检索 如果有返回索引值
 *
 * @param {(any[] | string)} data 需要查找的数组或者字符串
 * @param {any} ele 指定的值, 可以是数字,字符串,对象
 * @param {(number | undefined)} [fromIndex] 从指定位置开始查找 默认undefined
 * @return {*}  {number} 返回第一次出现的索引, 如果没有找到, 则返回-1
 * @example indexOf([1,2,3], 1) => 0 indexOf([{c:1}, {a:1,b:2}], {a:1}) => -1 indexOf([[1], [2,3]], [2,3]) => 1
 */
const indexOf = (
	data: any[] | string,
	ele: any,
	fromIndex: number = 0
): number => {
	if(!isArray(data) && !isString(data)) return -1;
	let len: number = data.length
	if (len === 0) return -1
	let index: number = fromIndex || 0
	let i: number = Math.max(
		index >= 0 ? index : data.length - Math.abs(fromIndex as number),
		0
	)
	while (i < len) {
		if(!isPrimitive(ele)) {
			const keys:any[] = isObj(ele) ? toKeys(ele) : ele
			let keyLen:number = keys.length;
			let current:number = 0;
			while(current < keyLen) {
				let key:any = keys[current]
				if(has(data[i], key) && data[i][key] === ele[key]) {
					current--
				}
			}
		}else {
			if (data[i] === ele) return i
		}
		if(isObj(ele)) {
			if(toKeys(data[i]).length === toKeys(ele).length) {
				let keys:string[] = toKeys(ele);
				for(let key in keys) {
					if(!has(data[i], key) || data[i][key] !== ele[key]) return -1
				}
				return i
			}
		}else if(isArray(ele)) {
			if(data[i].join("") === ele.join("")) return i	//用转换成字符串比较
		}else {
			if (data[i] === ele) return i
		}
		i++
	}
	return -1
}
export default indexOf
