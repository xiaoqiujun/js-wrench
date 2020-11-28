import ltrim from './ltrim'
import toLowerCase from './toLowerCase'
/**
 * @description 首字母小写
 * @param str string 接收一个字符串
 * @return string 返回一个字符串
 * @example toFirstUpper("abc") => abc toFirstUpper("ABC") => aBC
 */
export default (str: string): string => {
	str = ltrim(str) //去掉左边的空格
	return toLowerCase(str.slice(0, 1)) + str.slice(1)
}
