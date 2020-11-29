/**
 *@description 是否WPhone
 *
 * @return {*}  {boolean}
 * @example isWPhone() => false|true
 */
var isWPhone = function () {
    var userAgentInfo = navigator.userAgent;
    if (userAgentInfo.indexOf('Windows Phone') > -1) {
        return true;
    }
    return false;
};
export default isWPhone;
