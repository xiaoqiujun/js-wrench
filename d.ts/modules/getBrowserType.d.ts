declare type browserType = 'IE7' | 'IE8' | 'IE9' | 'IE10' | 'IE11' | 'Edge' | 'FireFox' | 'Opera' | 'Chrome' | 'Safari' | null;
/**
 * @description 获取浏览器类型
 *
 * @return {*}  {browserType} | 'IE7'| 'IE8'| 'IE9'| 'IE10'| 'IE11'| 'Edge'| 'FireFox'| 'Opera'| 'Chrome'| 'Safari'| null
 * @example getBrowserType() => 'Chrome'
 */
declare const getBrowserType: () => browserType;
export default getBrowserType;
