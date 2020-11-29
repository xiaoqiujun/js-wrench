/**
 * @description 是否PC端
 *
 * @return {*}  {boolean}
 * @example isPC() => true|false
 */
var isPC = function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = [
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod',
    ];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};
export default isPC;
