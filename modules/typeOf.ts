/**
 * @description 判断数据类型
 * @param v any
 * @param t string  string|number|object|function|boolean|undefined|symbol
 */
type Types = "string" | "number" | "object" | "function" | "boolean" | "undefined" | "symbol" | "bigint";
export default (v:any, t:Types):boolean => {
    return (typeof v) === t;
}