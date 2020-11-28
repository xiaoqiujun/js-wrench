/**
 * @description 获取随机验证码
 * @param count {number} 生成随机码的个数 默认是4
 * @example getVerifyCode(4) => 4sGa
 * @returns string
 */
export default (count: number = 4): string => {
	let strAll: string =
		'azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789'
	let newStr: string = ''
	for (let i: number = 0; i < count; i++) {
		let index: number = Math.floor(Math.random() * strAll.length)
		newStr += strAll.charAt(index)
	}
	return newStr
}
