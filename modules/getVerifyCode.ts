/**
 * @description 获取随机验证码
 *
 * @param {number} [len=4] 默认长度是4位
 * @return {*}  {string} 返回一个[len]长度的随机字符串
 * @example getVerifyCode(4) => 4sGa
 */
const getVerifyCode = (len: number = 4): string => {
	let strAll: string =
		'azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789'
	let newStr: string = ''
	for (let i: number = 0; i < len; i++) {
		let index: number = Math.floor(Math.random() * strAll.length)
		newStr += strAll.charAt(index)
	}
	return newStr
}
export default getVerifyCode
