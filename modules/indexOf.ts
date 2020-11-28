
/**
 * @description indexOf
 * @param arr [] 数组
 * @param ele never 查询的元素
 * @param fromIndex number|undefined 开始查找的位置
 */
export default (arr:[], ele:never, fromIndex:number | undefined):number => {
    let len:number = arr.length;
    if(len === 0) return -1;
    let index:number = fromIndex || 0;
    let i:number = Math.max(index >= 0 ? index: arr.length - Math.abs(fromIndex as number), 0);

    while(i < len) {
        if(i in arr && arr[i] === ele) return i;
        i++;
    }
    return -1;
}