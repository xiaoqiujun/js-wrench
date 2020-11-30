/**
 * @description 对url做简单解析成object
 *
 * @param {string} url 需要被解析的Url地址
 * @return {*}  {*} 返回一个对象
 * @example urlParse("http:127.0.0.1:8080?type=1&id=123&name=zhangsan") => {url: "http:127.0.0.1:8080", type: "1", id: "123", name: "zhangsan"}
 */
declare const toQuery: (url: string) => any;
export default toQuery;
