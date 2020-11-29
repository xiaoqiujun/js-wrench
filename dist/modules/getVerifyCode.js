/**
 * @description 获取随机验证码
 *
 * @param {number} [count=4]
 * @return {*}  {string}
 * @example getVerifyCode(4) => 4sGa
 */
var getVerifyCode = function (count) {
    if (count === void 0) { count = 4; }
    var strAll = 'azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789';
    var newStr = '';
    for (var i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * strAll.length);
        newStr += strAll.charAt(index);
    }
    return newStr;
};
export default getVerifyCode;
