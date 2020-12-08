/**
 * @description 函数节流
 *
 * @param {{ apply: (args0: any, args1: any) => void }} fn 需要做节流处理的函数
 * @param {number} [delay=500] 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
const throttle = (fn, delay = 500) => {
    let lastTime = 0;
    return function (...args) {
        let now = new Date().getTime();
        if (now - lastTime > delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
};
export default throttle;
