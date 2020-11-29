declare type browserType = 'IE7' | 'IE8' | 'IE9' | 'IE10' | 'IE11' | 'Edge' | 'FireFox' | 'Opera' | 'Chrome' | 'Safari' | '[版本过低]' | '';
/**
 * @description 获取浏览器类型
 * @return {*}  {string}
 */
declare const getBrowserType: () => browserType;
export default getBrowserType;
