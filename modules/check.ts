/**
 * @description 正则验证 使用单例
 */
class CheckRegExp {
	private static $instance: CheckRegExp
	constructor() {}
	public static getInstance() {
		if (!this.$instance) this.$instance = new CheckRegExp()

		return this.$instance
	}

	/**
	 * @description 匹配手机号码
	 * @param v any
	 * @returns boolean
	 */
	public mobile(v: any): boolean {
		let reg: RegExp = /^1[3|4|5|6|7|8|9][0-9]{9}$/
		return reg.test(v)
	}
	/**
	 * @description 匹配座机
	 * @param v any
	 * @returns boolean
	 */
	public telephone(v: any): boolean {
		let reg: RegExp = /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/
		return reg.test(v)
	}

	/**
	 * @description 匹配密码
	 * 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
	 * @param v any
	 * @return  boolean
	 */
	public password(v: any): boolean {
		let reg: RegExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		return reg.test(v)
	}

	/**
	 * @description 匹配QQ号码
	 * @param v any
	 * @returns boolean
	 */
	public qq(v: any): boolean {
		let reg: RegExp = /^[1-9][0-9]{4,9}$/
		return reg.test(v)
	}

	/**
	 * @description 匹配身份证号码
	 * @param v any
	 * @returns boolean
	 */
	public IDcard(v: any): boolean {
		let reg: RegExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		return reg.test(v)
	}

	/**
	 * @description 匹配邮政编码
	 * @param v any
	 * @returns boolean
	 */
	public postal(v: any): boolean {
		let reg: RegExp = /[1-9]\d{5}(?!\d)/
		return reg.test(v)
	}

	/**
	 * @description 匹配URL
	 * @param v any
	 * @returns boolean
	 */
	public url(v: any): boolean {
		let reg: RegExp = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
		return reg.test(v)
	}

	/**
	 * @description 匹配IP
	 * @param v any
	 * @returns boolean
	 */
	public ip(v: any): boolean {
		let reg: RegExp = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/
		return reg.test(v)
	}

	/**
	 * @description 匹配数字
	 * @param v any
	 * @returns boolean
	 */
	public number(v: any): boolean {
		let reg: RegExp = /^[0-9]$/
		return reg.test(v)
	}

	/**
	 * @description 匹配英文
	 * @param v any
	 * @returns boolean
	 */
	public en(v: any): boolean {
		let reg: RegExp = /^[a-zA-Z]+$/
		return reg.test(v)
	}

	/**
	 * @description 匹配中文
	 * @param v any
	 * @returns boolean
	 */
	public cn(v: any): boolean {
		let reg: RegExp = /^[\u4E00-\u9FA5]+$/
		return reg.test(v)
	}

	/**
	 * @description 匹配HTML标签
	 * @param v any
	 * @returns boolean
	 */
	public html(v: any): boolean {
		let reg: RegExp = /<("[^"]*"|'[^']*'|[^'">])*>/
		return reg.test(v)
	}

	/**
	 * @description 匹配邮箱地址
	 * @param v any
	 * @returns boolean
	 */
	public email(v: any): boolean {
		let reg: RegExp = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
		return reg.test(v)
	}

	/**
	 * @description 匹配账号合法
	 * @param v any
	 * @returns boolean
	 */
	public username(v: any): boolean {
		let reg: RegExp = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
		return reg.test(v)
	}
}

const check = CheckRegExp.getInstance()
export default check
