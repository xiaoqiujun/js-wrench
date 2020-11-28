/**
 * @description 生成简单随机数
 * @param lower number 默认是 0 起始数
 * @param upper number 默认是 1 结尾数
 * @return number 返回一个number类型
 */
export default (lower: number = 0, upper: number = 1): number => {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}