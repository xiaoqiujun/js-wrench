/**
 * @description 正则验证 使用单例
 *
 * @class CheckRegExp
 */
var CheckRegExp = /** @class */ (function () {
    function CheckRegExp() {
    }
    /**
     * @description 获取实例
     *
     * @static
     * @return {*}
     * @memberof CheckRegExp
     */
    CheckRegExp.getInstance = function () {
        if (!this.$instance)
            this.$instance = new CheckRegExp();
        return this.$instance;
    };
    /**
     *
     * @description 匹配手机号码
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example mobile(12345678) => return false
     */
    CheckRegExp.prototype.mobile = function (v) {
        var reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
        return reg.test(v);
    };
    /**
     *@description 匹配座机
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example telephone("1367894517") => false
     */
    CheckRegExp.prototype.telephone = function (v) {
        var reg = /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/;
        return reg.test(v);
    };
    /**
     * @description 匹配密码 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example password("abc!@") => false
     */
    CheckRegExp.prototype.password = function (v) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(v);
    };
    /**
     * @description 匹配QQ号码
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example qq("12345") => false
     */
    CheckRegExp.prototype.qq = function (v) {
        var reg = /^[1-9][0-9]{4,9}$/;
        return reg.test(v);
    };
    /**
     * @description 匹配身份证号码
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example IDcard("2313213213") => false
     */
    CheckRegExp.prototype.IDcard = function (v) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(v);
    };
    /**
     * @description 匹配邮政编码
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example postal("511740") => true
     */
    CheckRegExp.prototype.postal = function (v) {
        var reg = /\d{6}/;
        return reg.test(v);
    };
    /**
     * @description 匹配URL
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example url("http://127.0.0.1") => true url("http://www.abc.com") => true
     */
    CheckRegExp.prototype.url = function (v) {
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        return reg.test(v);
    };
    /**
     * @description 匹配IP
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example IPv4("127.0.0.1") => true
     */
    CheckRegExp.prototype.IPv4 = function (v) {
        var reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return reg.test(v);
    };
    /**
     * @description 匹配数字
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example number("123") => true number("s1") => false
     */
    CheckRegExp.prototype.number = function (v) {
        var reg = /^[0-9]$/;
        return reg.test(v);
    };
    /**
     * @description 匹配英文
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example en("cn") => true
     */
    CheckRegExp.prototype.en = function (v) {
        var reg = /^[a-zA-Z]+$/;
        return reg.test(v);
    };
    /**
     * @description 匹配中文
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example cn("中文") => true  cn("cn") => false
     */
    CheckRegExp.prototype.cn = function (v) {
        var reg = /^[\u4E00-\u9FA5]+$/;
        return reg.test(v);
    };
    /**
     * @description 匹配HTML标签
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example html("<div></div>") => true
     */
    CheckRegExp.prototype.html = function (v) {
        var reg = /<("[^"]*"|'[^']*'|[^'">])*>/;
        return reg.test(v);
    };
    /**
     * @description 匹配邮箱地址
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example email("1324568@qq.com") => true
     */
    CheckRegExp.prototype.email = function (v) {
        var reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        return reg.test(v);
    };
    /**
     * @description 匹配账号合法
     *
     * @param {*} v
     * @return {*}  {boolean}
     * @memberof CheckRegExp
     * @example username(abc_132) => true
     */
    CheckRegExp.prototype.username = function (v) {
        var reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        return reg.test(v);
    };
    return CheckRegExp;
}());
var check = CheckRegExp.getInstance();
export default check;
