import ltrim from './ltrim'
import toUpperCase from './toUpperCase'
/**
 * @description 首字母大写
 * @param str string 接收一个字符串
 * @return string 返回一个字符串
 * @example toFirstUpper("abc") => Abc toFirstUpper("ABC") => ABC
 */
export default (str: string): string => {
	str = ltrim(str) //去掉左边的空格
	return toUpperCase(str.slice(0, 1)) + str.slice(1)
}
