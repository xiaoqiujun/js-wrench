/**
 * @description 小写转换成大写
 * @param str string 接收一个字符串类型
 * @return string 返回一个大写字符串
 */
export default (str: string):string => {
    let _arr: string[] = str.split("");
    let _ascii: number;
    let _max: number = "z".charCodeAt(0);
    let _min: number = "a".charCodeAt(0);
    for (let i: number = 0; i < _arr.length; i++) {
        _ascii = _arr[i].charCodeAt(0);
        if (_max >= _ascii && _min <= _ascii) {
            _arr[i] = String.fromCharCode(_ascii - 32);
        }
    }
    return _arr.join("");
}