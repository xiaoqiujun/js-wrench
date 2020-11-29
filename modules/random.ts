/**
 * @description 生成简单随机数
 *
 * @param {number} [lower=0]
 * @param {number} [upper=1]
 * @return {*}  {number}
 * @example random(0, 4) => 3
 */
const random = (lower: number = 0, upper: number = 1): number => {
	return Math.floor(Math.random() * (upper - lower)) + lower
}
export default random
