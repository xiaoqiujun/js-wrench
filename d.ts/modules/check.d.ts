/**
 * @description 正则验证 使用单例
 *
 * @class CheckRegExp
 */
declare class CheckRegExp {
    private static $instance;
    constructor();
    /**
     * @description 获取实例
     *
     * @static
     * @return {*}
     * @memberof CheckRegExp
     */
    static getInstance(): CheckRegExp;
    /**
     *
     * @description 匹配手机号码
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example mobile(12345678) => return false
     */
    mobile(v: any): boolean;
    /**
     *@description 匹配座机
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example telephone("1367894517") => false
     */
    telephone(v: any): boolean;
    /**
     * @description 匹配密码 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example password("abc!@") => false
     */
    password(v: any): boolean;
    /**
     * @description 匹配QQ号码
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example qq("12345") => false
     */
    qq(v: any): boolean;
    /**
     * @description 匹配身份证号码
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example IDcard("2313213213") => false
     */
    IDcard(v: any): boolean;
    /**
     * @description 匹配邮政编码
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example postal("511740") => true
     */
    postal(v: any): boolean;
    /**
     * @description 匹配URL
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example url("http://127.0.0.1") => true url("http://www.abc.com") => true
     */
    url(v: any): boolean;
    /**
     * @description 匹配IP
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example IPv4("127.0.0.1") => true
     */
    IPv4(v: any): boolean;
    /**
     * @description 匹配数字
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example number("123") => true number("s1") => false
     */
    number(v: any): boolean;
    /**
     * @description 匹配英文
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example en("cn") => true
     */
    en(v: any): boolean;
    /**
     * @description 匹配中文
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example cn("中文") => true  cn("cn") => false
     */
    cn(v: any): boolean;
    /**
     * @description 匹配HTML标签
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example html("<div></div>") => true
     */
    html(v: any): boolean;
    /**
     * @description 匹配邮箱地址
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example email("1324568@qq.com") => true
     */
    email(v: any): boolean;
    /**
     * @description 匹配账号合法
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example username(abc_132) => true
     */
    username(v: any): boolean;
}
declare const check: CheckRegExp;
export default check;
