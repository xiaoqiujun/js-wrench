/**
 * @description 是否Android
 *
 * @return {*}  {boolean} 返回一个布尔值
 * @example isAndroid() => true|false
 */
const isAndroid = () => {
    let userAgentInfo = navigator.userAgent;
    if (userAgentInfo.indexOf('Android') > -1 ||
        userAgentInfo.indexOf('Linux') > -1) {
        return true;
    }
    return false;
};
export default isAndroid;
