/**
 * @description 大写转换成小写
 *
 * @param {string} str
 * @return {*}  {string}
 * @example toLowerCase("ABC") => "abc"
 */
var toLowerCase = function (str) {
    var _arr = str.split('');
    var _ascii;
    var _max = 'Z'.charCodeAt(0);
    var _min = 'A'.charCodeAt(0);
    for (var i = 0; i < _arr.length; i++) {
        _ascii = _arr[i].charCodeAt(0);
        if (_max >= _ascii && _min <= _ascii) {
            _arr[i] = String.fromCharCode(_ascii + 32);
        }
    }
    return _arr.join('');
};
export default toLowerCase;
