/**
 * @description 小写转换成大写
 *
 * @param {string} str 需要被转换的字符串
 * @return {*}  {string} 一个新的字符串, 转换为大写的字符串
 * @example toUpperCase("abc") => "ABC"
 */
const toUpperCase = (str) => {
    let _arr = str.split('');
    let _ascii;
    let _max = 'z'.charCodeAt(0);
    let _min = 'a'.charCodeAt(0);
    for (let i = 0; i < _arr.length; i++) {
        _ascii = _arr[i].charCodeAt(0);
        if (_max >= _ascii && _min <= _ascii) {
            _arr[i] = String.fromCharCode(_ascii - 32);
        }
    }
    return _arr.join('');
};
export default toUpperCase;
