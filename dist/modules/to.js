/**
 * 异步异常处理
 * @param promise 接收一个primose
 * @returns promise
 */
const to = (promise) => {
    if (typeof promise.then !== 'function') {
        let _promise = new Promise((resolve) => {
            resolve(promise);
        });
        return to(_promise);
    }
    return promise.then((data) => [null, data])
        .catch((err) => [err, undefined]);
};
export default to;
