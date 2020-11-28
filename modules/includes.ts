import isArray from './isArray';
import {arrayProto} from './init';
import isFn from './isFn';
export default (arr:[], ele: never, fromIndex?: number | undefined):boolean => {
    if(!isArray(arr)) return false;
    if(isFn(arrayProto.includes)) {
        return arr.includes(ele, fromIndex);
    }
    let index:number = fromIndex || 0;
    let i:number = Math.max(index >= 0 ? index: arr.length - Math.abs(fromIndex as number), 0);
    while(i < arr.length) {
        if(("" + arr[i]) === ("" + ele)) {
            return true;
        }
        i++;
    }
    return false;
}