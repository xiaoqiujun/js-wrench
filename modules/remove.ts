import isFn from './isFn';
import isNumber from './isNumber';
import isArray from './isArray';
import {splice} from './init';

/**
 * @description 删除数组元素
 *
 * @param {Array<any>} arr  需要操作的数组
 * @param {(Function|number)} iteratee 回调
 * @return {*}  {Array<any>} 返回新的数组 注意并不是原数组的引用
 * @example remove([1,2,3], (v, i, arr) => v === 1) => [2,3];
 */
const remove = (arr:Array<any>, iteratee:Function|number):Array<any> => {
    if(!isArray(arr)) return [];
    const result:Array<any> = [];
    const indexs:Array<number> = [];    //存放索引, 因为splice后 length会有变化
    let index:number = 0;
    const length:number = arr.length;
    
    while(index < length) {
        let value:any = arr[index];
        if(isNumber(iteratee)) {
            index === iteratee ? indexs.push(index) : result.push(value);
        }else if(isFn(iteratee)) {
            if((iteratee as Function)(value, index, arr)) {
                indexs.push(index);
            }else {
                result.push(value);
            }
        }
        index++;
    }
    indexs.forEach(i => arr.splice(i, 1));
    return result;
}

export default remove