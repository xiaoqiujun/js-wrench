/**
 * @description 获取随机验证码
 *
 * @param {number} [count=4]
 * @return {*}  {string}
 * @example getVerifyCode(4) => 4sGa
 */
const getVerifyCode = (count: number = 4): string => {
	let strAll: string =
		'azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789'
	let newStr: string = ''
	for (let i: number = 0; i < count; i++) {
		let index: number = Math.floor(Math.random() * strAll.length)
		newStr += strAll.charAt(index)
	}
	return newStr
}
export default getVerifyCode
