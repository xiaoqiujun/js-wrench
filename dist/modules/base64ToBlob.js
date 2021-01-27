/**
 *
 * @param base64 base64数据
 * @returns
 */
const base64ToBlob = (base64) => {
    if (!base64)
        return;
    let arr = base64.split(',');
    let mime = 'image/png';
    let match = arr[0].match(/:(.*?);/);
    if (match && match[1]) {
        mime = match[1];
    }
    let bytes = window.atob(arr[1]);
    let arrayBuffer = new ArrayBuffer(bytes.length);
    let ia = new Uint8Array(arrayBuffer);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    let blob = new Blob([arrayBuffer], {
        type: mime
    });
    let formdata = new FormData(); // new一个formdata对象
    let _filename = new Date().getTime() + '.png'; // 修改文件名
    formdata.append('file', blob, _filename); // key值, 二进制类型文件,文件名
    return formdata;
};
export default base64ToBlob;
