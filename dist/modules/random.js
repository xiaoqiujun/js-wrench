/**
 * @description 生成简单随机数
 *
 * @param {number} [lower=0]
 * @param {number} [upper=1]
 * @return {*}  {number}
 * @example random(0, 4) => 3
 */
var random = function (lower, upper) {
    if (lower === void 0) { lower = 0; }
    if (upper === void 0) { upper = 1; }
    return Math.floor(Math.random() * (upper - lower)) + lower;
};
export default random;
