/**
 * @description 函数防抖
 *
 * @param {{ apply: (args0: any, args1: any) => void }} fn 需要做防抖处理的函数
 * @param {number} [delay=500] 延迟时间 默认500ms
 * @return {*}  {Function} 返回防抖后的函数
 */
const debounce = (fn: { apply: (args0: any, args1: any) => void }, delay: number = 500):Function => {
    let timeout: any = null;
    return function (this: any, ...args: any) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            fn.apply(this, args);
        }, delay);
    };
};

export default debounce
