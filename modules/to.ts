/**
 * 异步异常处理
 * @param promise 接收一个primose
 * @returns promise
 */
const to = <T, E = Error>(promise: Promise<T>):Promise<[E,undefined]|[null,T]> => {
	if(typeof promise.then !== 'function') {
		let _promise:Promise<T> = new Promise((resolve) => {
			resolve(promise)
		})
		return to(_promise)
	}
	return promise.then<[null,T]>((data:T) => [null, data])
	.catch<[E,undefined]>((err:E) => [err, undefined])
}

export default to