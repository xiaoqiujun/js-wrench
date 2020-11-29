/**
 * @description 是否IOS
 *
 * @return {*}  {boolean}
 * @example isIOS() => false|true
 */
var isIOS = function () {
    var userAgentInfo = navigator.userAgent;
    if (userAgentInfo.indexOf('iPhone') > -1) {
        return true;
    }
    return false;
};
export default isIOS;
