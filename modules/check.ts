/**
 * @description 正则验证 使用单例
 *
 * @class CheckRegExp
 */
class CheckRegExp {
	private static $instance: CheckRegExp
	constructor() {}
	/**
	 * @description 获取实例
	 *
	 * @static
	 * @return {*}
	 * @memberof CheckRegExp
	 */
	public static getInstance() {
		if (!this.$instance) this.$instance = new CheckRegExp()

		return this.$instance
	}
	/**
	 *
	 * @description 匹配手机号码
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example mobile(12345678) => return false
	 */
	public mobile(v: any): boolean {
		let reg: RegExp = /^1[3|4|5|6|7|8|9][0-9]{9}$/
		return reg.test(v)
	}
	/**
	 *@description 匹配座机
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example telephone("1367894517") => false
	 */
	public telephone(v: any): boolean {
		let reg: RegExp = /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/
		return reg.test(v)
	}

	/**
	 * @description 匹配密码 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example password("abc!@") => false
	 */
	public password(v: any): boolean {
		let reg: RegExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		return reg.test(v)
	}

	/**
	 * @description 匹配QQ号码
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example qq("12345") => false
	 */
	public qq(v: any): boolean {
		let reg: RegExp = /^[1-9][0-9]{4,9}$/
		return reg.test(v)
	}

	/**
	 * @description 匹配身份证号码
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example IDcard("2313213213") => false
	 */
	public IDcard(v: any): boolean {
		let reg: RegExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		return reg.test(v)
	}

	/**
	 * @description 匹配邮政编码
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example postal("511740") => true
	 */
	public postal(v: any): boolean {
		let reg: RegExp = /\d{6}/
		return reg.test(v)
	}

	/**
	 * @description 匹配URL
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example url("http://127.0.0.1") => true url("http://www.abc.com") => true
	 */
	public url(v: any): boolean {
		let reg: RegExp = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
		return reg.test(v)
	}

	/**
	 * @description 匹配IP
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example IPv4("127.0.0.1") => true
	 */
	public IPv4(v: any): boolean {
		let reg: RegExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
		return reg.test(v)
	}

	/**
	 * @description 匹配数字
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example number("123") => true number("s1") => false
	 */
	public number(v: any): boolean {
		let reg: RegExp = /^[0-9]$/
		return reg.test(v)
	}

	/**
	 * @description 匹配英文
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example en("cn") => true
	 */
	public en(v: any): boolean {
		let reg: RegExp = /^[a-zA-Z]+$/
		return reg.test(v)
	}

	/**
	 * @description 匹配中文
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example cn("中文") => true  cn("cn") => false
	 */
	public cn(v: any): boolean {
		let reg: RegExp = /^[\u4E00-\u9FA5]+$/
		return reg.test(v)
	}

	/**
	 * @description 匹配HTML标签
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example html("<div></div>") => true
	 */
	public html(v: any): boolean {
		let reg: RegExp = /<("[^"]*"|'[^']*'|[^'">])*>/
		return reg.test(v)
	}

	/**
	 * @description 匹配邮箱地址
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example email("1324568@qq.com") => true
	 */
	public email(v: any): boolean {
		let reg: RegExp = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
		return reg.test(v)
	}

	/**
	 * @description 匹配账号合法
	 *
	 * @param {*} v 要匹配的内容
	 * @return {*}  {boolean} 返回一个布尔值
	 * @memberof CheckRegExp
	 * @example username(abc_132) => true
	 */
	public username(v: any): boolean {
		let reg: RegExp = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
		return reg.test(v)
	}
}

const check:CheckRegExp = CheckRegExp.getInstance()
export default check
