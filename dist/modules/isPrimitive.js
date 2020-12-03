import typeOf from "./typeOf";
/**
 * @description 是否基本数据类型
 * @param v any 任意类型
 * @return boolean 返回一个boolean值
 * @example isPrimitive(1) => true isPrimitive({}) => false
 */
const isPrimitive = (v) => {
    return (typeOf(v, "string") ||
        typeOf(v, "number") ||
        typeOf(v, "symbol") ||
        typeOf(v, "boolean"));
};
export default isPrimitive;
