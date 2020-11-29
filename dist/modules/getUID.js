/**
 * @description 生成唯一的UID
 *
 * @return {*}  {string}
 * @example createUID() => 5d33b0fc-692d-41eb-e703-4aa76ab08f
 */
var getUID = function () {
    var uniqid = '';
    var rule = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxx';
    uniqid = rule.replace(/[xy]/g, function (rep) {
        var num = (16 * Math.random()) | 0;
        return ('x' === rep ? num : 3 && num | 8).toString(16);
    });
    return uniqid;
};
export default getUID;
