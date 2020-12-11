/**
 * @description 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数
 *
 * @param {{ apply: (args0: any, args1: any) => void }} target
 * @param {*} obj 需要绑定的对象
 * @return {*}  {(Function|void)} 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数
 * @example bind(fn, {a:1})
 */
declare const bind: (target: {
    apply: (args0: any, args1: any) => void;
}, obj: any) => Function | null;
export default bind;
