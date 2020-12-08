/**
 * @description 函数节流
 *
 * @param {{ apply: (args0: any, args1: any) => void }} fn 需要做节流处理的函数
 * @param {number} [delay=500] 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
declare const throttle: (fn: {
    apply: (args0: any, args1: any) => void;
}, delay?: number) => Function;
export default throttle;
