/**
 * @description 对url做简单解析成object
 *
 * @param {string} url
 * @return {*}  {*}
 * @example urlParse("http:127.0.0.1:8080?type=1&id=123&name=zhangsan") => {url: "http:127.0.0.1:8080", type: "1", id: "123", name: "zhangsan"}
 */
var toQuery = function (url) {
    var urlObj = {};
    var split = url.split('?');
    if (split.length === 1)
        return split[0];
    if (split.length === 2) {
        urlObj['url'] = split[0];
        var param = split[1].split('&');
        if (param.length > 1) {
            for (var i = 0; i < param.length; i++) {
                var _param = param[i].split('=');
                if (_param.length === 2) {
                    urlObj[_param[0]] = _param[1];
                }
            }
        }
    }
    return urlObj;
};
export default toQuery;
