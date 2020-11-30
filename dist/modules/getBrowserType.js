/**
 * @description 获取浏览器类型
 *
 * @return {*}  {browserType} | 'IE7'| 'IE8'| 'IE9'| 'IE10'| 'IE11'| 'Edge'| 'FireFox'| 'Opera'| 'Chrome'| 'Safari'| null
 * @example getBrowserType() => 'Chrome'
 */
const getBrowserType = () => {
    let types = null;
    let userAgentInfo = navigator.userAgent;
    let isOpera = userAgentInfo.indexOf('Opera') > -1;
    let isIE = userAgentInfo.indexOf('compatible') > -1 &&
        userAgentInfo.indexOf('MSIE') > -1 &&
        !isOpera;
    let isIE11 = userAgentInfo.indexOf('Trident') > -1 &&
        userAgentInfo.indexOf('rv:11.0') > -1;
    let isEdge = userAgentInfo.indexOf('Edge') > -1 && !isIE;
    let isFireFox = userAgentInfo.indexOf('Firefox') > -1;
    let isSafari = userAgentInfo.indexOf('Safari') > -1 &&
        userAgentInfo.indexOf('Chrome') === -1;
    let isChrome = userAgentInfo.indexOf('Chrome') > -1 &&
        userAgentInfo.indexOf('Safari') > -1;
    if (isIE) {
        let regIE = new RegExp('MSIE (\\d+\\.\\d+);');
        regIE.test(userAgentInfo);
        let version = parseFloat(RegExp['$1']);
        if (version == 7)
            types = 'IE7';
        else if (version == 8)
            types = 'IE8';
        else if (version == 9)
            types = 'IE9';
        else if (version == 10)
            types = 'IE10';
        else
            types = null;
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
