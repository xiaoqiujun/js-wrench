/**
 * @description 获取浏览器类型
 * @return {*}  {string}
 */
var getBrowserType = function () {
    var types = '';
    var userAgentInfo = navigator.userAgent;
    var isOpera = userAgentInfo.indexOf('Opera') > -1;
    var isIE = userAgentInfo.indexOf('compatible') > -1 &&
        userAgentInfo.indexOf('MSIE') > -1 &&
        !isOpera;
    var isIE11 = userAgentInfo.indexOf('Trident') > -1 &&
        userAgentInfo.indexOf('rv:11.0') > -1;
    var isEdge = userAgentInfo.indexOf('Edge') > -1 && !isIE;
    var isFireFox = userAgentInfo.indexOf('Firefox') > -1;
    var isSafari = userAgentInfo.indexOf('Safari') > -1 &&
        userAgentInfo.indexOf('Chrome') === -1;
    var isChrome = userAgentInfo.indexOf('Chrome') > -1 &&
        userAgentInfo.indexOf('Safari') > -1;
    if (isIE) {
        var regIE = new RegExp('MSIE (\\d+\\.\\d+);');
        regIE.test(userAgentInfo);
        var version = parseFloat(RegExp['$1']);
        if (version == 7)
            types = 'IE7';
        else if (version == 8)
            types = 'IE8';
        else if (version == 9)
            types = 'IE9';
        else if (version == 10)
            types = 'IE10';
        else
            types = '[版本过低]';
    }
    if (isIE11)
        types = 'IE11';
    if (isEdge)
        types = 'Edge';
    if (isFireFox)
        types = 'FireFox';
    if (isOpera)
        types = 'Opera';
    if (isSafari)
        types = 'Safari';
    if (isChrome)
        types = 'Chrome';
    return types;
};
export default getBrowserType;
