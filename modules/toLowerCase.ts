/**
 * @description 大写转换成小写
 *
 * @param {string} str 需要被转换的字符串
 * @return {*}  {string} 一个新的字符串, 转换为小写的字符串
 * @example toLowerCase("ABC") => "abc"
 */
const toLowerCase = (str: string): string => {
	let _arr: string[] = str.split('')
	let _ascii: number
	let _max: number = 'Z'.charCodeAt(0)
	let _min: number = 'A'.charCodeAt(0)
	for (let i: number = 0; i < _arr.length; i++) {
		_ascii = _arr[i].charCodeAt(0)
		if (_max >= _ascii && _min <= _ascii) {
			_arr[i] = String.fromCharCode(_ascii + 32)
		}
	}
	return _arr.join('')
}
export default toLowerCase
