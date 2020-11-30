/**
 * @description 正则验证 使用单例
 *
 * @class CheckRegExp
 */
class CheckRegExp {
    constructor() { }
    /**
     * @description 获取实例
     *
     * @static
     * @return {*}
     * @memberof CheckRegExp
     */
    static getInstance() {
        if (!this.$instance)
            this.$instance = new CheckRegExp();
        return this.$instance;
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
    mobile(v) {
        let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
        return reg.test(v);
    }
    /**
     *@description 匹配座机
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example telephone("1367894517") => false
     */
    telephone(v) {
        let reg = /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/;
        return reg.test(v);
    }
    /**
     * @description 匹配密码 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example password("abc!@") => false
     */
    password(v) {
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(v);
    }
    /**
     * @description 匹配QQ号码
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example qq("12345") => false
     */
    qq(v) {
        let reg = /^[1-9][0-9]{4,9}$/;
        return reg.test(v);
    }
    /**
     * @description 匹配身份证号码
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example IDcard("2313213213") => false
     */
    IDcard(v) {
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(v);
    }
    /**
     * @description 匹配邮政编码
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example postal("511740") => true
     */
    postal(v) {
        let reg = /\d{6}/;
        return reg.test(v);
    }
    /**
     * @description 匹配URL
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example url("http://127.0.0.1") => true url("http://www.abc.com") => true
     */
    url(v) {
        let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        return reg.test(v);
    }
    /**
     * @description 匹配IP
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example IPv4("127.0.0.1") => true
     */
    IPv4(v) {
        let reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return reg.test(v);
    }
    /**
     * @description 匹配数字
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example number("123") => true number("s1") => false
     */
    number(v) {
        let reg = /^[0-9]$/;
        return reg.test(v);
    }
    /**
     * @description 匹配英文
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example en("cn") => true
     */
    en(v) {
        let reg = /^[a-zA-Z]+$/;
        return reg.test(v);
    }
    /**
     * @description 匹配中文
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example cn("中文") => true  cn("cn") => false
     */
    cn(v) {
        let reg = /^[\u4E00-\u9FA5]+$/;
        return reg.test(v);
    }
    /**
     * @description 匹配HTML标签
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example html("<div></div>") => true
     */
    html(v) {
        let reg = /<("[^"]*"|'[^']*'|[^'">])*>/;
        return reg.test(v);
    }
    /**
     * @description 匹配邮箱地址
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example email("1324568@qq.com") => true
     */
    email(v) {
        let reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        return reg.test(v);
    }
    /**
     * @description 匹配账号合法
     *
     * @param {*} v 要匹配的内容
     * @return {*}  {boolean} 返回一个布尔值
     * @memberof CheckRegExp
     * @example username(abc_132) => true
     */
    username(v) {
        let reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        return reg.test(v);
    }
}
const check = CheckRegExp.getInstance();
export default check;
