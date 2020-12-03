/**
 * @description 格式化类
 *
 * @class Format
 */
declare class Format {
    private static $instance;
    constructor();
    /**
     * @description 获取实例
     *
     * @static
     * @return {*}
     * @memberof CheckRegExp
     */
    static getInstance(): Format;
    /**
     * @description 简单的日期格式化
     *
     * @param {Date} date Data 日期
     * @param {string} [format="-"] string 默认-
     * @return {*}  {string} 返回格式化后的日期
     * @example date(new Date()) => 2019-6-12 13:43:23
     * @memberof Format
     */
    date(date: Date, format?: string): string;
    /**
     * @description 对金额进行千位分隔
     *
     * @param {string} str 需要格式化的金额
     * @param {number} [radix] 如果有小数位 保留[radix]位数
     * @return {*}  {string} 返回格式化后的金额
     * @example money("1223547.68") => 1,223,547.68
     * @memberof Format
     */
    money(str: string, radix?: number): string;
}
declare const format: Format;
export default format;
