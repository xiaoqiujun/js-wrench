/**
 * @description 函数节流
 *
 * @param {{ apply: (args0: any, args1: any) => void }} fn 需要做节流处理的函数
 * @param {number} [delay=500] 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
const throttle = (fn: { apply: (args0: any, args1: any) => void }, delay: number = 500):Function => {
    let lastTime: number = 0;
    return function (this: any, ...args: any) {
        let now:number = new Date().getTime();
        if(now - lastTime > delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
};

export default throttle
