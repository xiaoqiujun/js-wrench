/**
 * @description 格式化类
 *
 * @class Format
 */
class Format {
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
            this.$instance = new Format();
        return this.$instance;
    }
    /**
     * @description 简单的日期格式化
     *
     * @param {Date} date Data 日期
     * @param {string} [format="-"] string 默认-
     * @return {*}  {string} 返回格式化后的日期
     * @example date(new Date()) => 2019-6-12 13:43:23
     * @memberof Format
     */
    date(date, format = "-") {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        month = month < 10 ? ('0' + month) : month;
        day = day < 10 ? ('0' + day) : day;
        hour = hour < 10 ? ('0' + hour) : hour;
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return year + format + month + format + day + ' ' + hour + ':' + minute + ':' + second;
    }
    /**
     * @description 对金额进行千位分隔
     *
     * @param {string} str 需要格式化的金额
     * @param {number} [radix] 如果有小数位 保留[radix]位数
     * @return {*}  {string} 返回格式化后的金额
     * @example money("1223547.68") => 1,223,547.68
     * @memberof Format
     */
    money(str, radix) {
        let reg = /\d{1,3}(?=(\d{3})+$)/g;
        let split = String(str).split(".");
        let newStr = split[0].replace(reg, "$&,");
        let digits = split[1] || "";
        digits = digits.slice(0, radix ? radix : digits.length);
        digits = digits ? "." + digits : "";
        return `${newStr}${digits}`;
    }
}
const format = Format.getInstance();
export default format;
