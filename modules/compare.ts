import isPrimitive from './isPrimitive';
/**
 * @description 对两个指定的值进行比较
 *
 * @param {*} param1 需要被比较的值
 * @param {*} param2 需要做比较的值
 * @return {*}  {boolean}
 */
const compare = (param1:any, param2:any):boolean => {
    if(isPrimitive(param1) && isPrimitive(param2))
        if(param1 === param2) return true

    
    return true
}

export default compare