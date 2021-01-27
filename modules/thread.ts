
/**
 * 
 * @param gen 函数生成器
 */
const thread = (gen:Function) => {
    let it = gen()
    function next(data?:any) {
      let res = it.next(data)
      if (res.done) return res.value
      res.value.then(() => {
        next(data)
      }).catch((e:any) => {
        res = it.next(data)
        next(data)
      })
    }
    next()
}

export default thread