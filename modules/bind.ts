import { slice } from "./init";
import noop from "./noop";
import typeOf from "./typeOf";
/**
 * @description 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数
 *
 * @param {{ apply: (args0: any, args1: any) => void }} target
 * @param {*} obj 需要绑定的对象
 * @return {*}  {(Function|void)} 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数
 * @example bind(fn, {a:1})
 */
const bind = function(target:{ apply: (args0: any, args1: any) => void }, obj:any):Function|null {
    if(!typeOf(target, 'object') && !typeOf(target, 'function')) return null;
    const args:any[] = slice.call(arguments, 1)
    const self:any = target
    const fn:any = noop
    const wrap = function(this:{ apply: (args0: any, args1: any) => void }) {
        const params:any[] = slice.call(arguments)
        self.apply(this ? this.constructor === self ? this : obj : obj, args.concat(params))
    }
    fn.prototype = self.prototype
    wrap.prototype = new fn()
    return wrap
}
export default bind