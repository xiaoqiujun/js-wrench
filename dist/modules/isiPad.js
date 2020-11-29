/**
 * @description 是否iPad
 *
 * @return {*}  {boolean}
 * @example isiPad() => true|false
 */
var isiPad = function () {
    var userAgentInfo = navigator.userAgent;
    if (userAgentInfo.indexOf('iPad') > -1) {
        return true;
    }
    return false;
};
export default isiPad;
