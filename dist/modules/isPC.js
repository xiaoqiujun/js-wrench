/**
 * @description 是否PC端
 *
 * @return {*}  {boolean} 返回一个布尔值
 * @example isPC() => true|false
 */
const isPC = () => {
    let userAgentInfo = navigator.userAgent;
    let Agents = [
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod',
    ];
    let flag = true;
    for (let i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};
export default isPC;
