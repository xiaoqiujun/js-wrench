/**
 * @description 对url做简单解析成object
 *
 * @param {string} url
 * @return {*}  {*}
 * @example urlParse("http:127.0.0.1:8080?type=1&id=123&name=zhangsan") => {url: "http:127.0.0.1:8080", type: "1", id: "123", name: "zhangsan"}
 */
declare const toQuery: (url: string) => any;
export default toQuery;
