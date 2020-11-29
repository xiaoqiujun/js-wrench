/**
 * @description 小写转换成大写
 *
 * @param {string} str
 * @return {*}  {string}
 * @example toUpperCase("abc") => "ABC"
 */
var toUpperCase = function (str) {
    var _arr = str.split('');
    var _ascii;
    var _max = 'z'.charCodeAt(0);
    var _min = 'a'.charCodeAt(0);
    for (var i = 0; i < _arr.length; i++) {
        _ascii = _arr[i].charCodeAt(0);
        if (_max >= _ascii && _min <= _ascii) {
            _arr[i] = String.fromCharCode(_ascii - 32);
        }
    }
    return _arr.join('');
};
export default toUpperCase;
