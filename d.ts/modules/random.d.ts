/**
 * @description 生成简单随机数
 *
 * @param {number} [lower=0] 最小范围
 * @param {number} [upper=1] 最大范围
 * @return {*}  {number} 返回一个[lower, upper]之间的数字
 * @example random(0, 4) => 3
 */
declare const random: (lower?: number, upper?: number) => number;
export default random;
