/**
 * 异步异常处理
 * @param promise 接收一个primose
 * @returns promise
 */
declare const to: <T, E = Error>(promise: Promise<T>) => Promise<[E, undefined] | [null, T]>;
export default to;
