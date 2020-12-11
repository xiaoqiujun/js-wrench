import deepCopy from "./deepCopy";
import each from "./each";
import isPrimitive from "./isPrimitive";
/**
 * @description 把一个对象上的属性拷贝到另个对象上
 *
 * @param {*} thisArgs 拷贝对象
 * @param {*} target 需要被拷贝的对象
 * @example extend({a:1}, {b:1})
 */
const extend = (thisArgs, target) => {
    if (isPrimitive(target) || isPrimitive(thisArgs))
        return;
    each(target, (v, key) => {
        if (!isPrimitive(v)) {
            thisArgs[key] = deepCopy(v);
        }
        else {
            thisArgs[key] = v;
        }
    });
};
export default extend;
