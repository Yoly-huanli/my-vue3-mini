import {track, trigger} from './effect'
export function reactive(obj:any){
  return new Proxy(obj,{
    get(target,key){
      const res = Reflect.get(target,key)
      // effect内函数触发依赖搜集
      track(target,key)
      return res
    },
    set(target,key,value){
      const res = Reflect.set(target,key,value)
      // 依赖执行
      trigger(target,key)
      return res
    }
  })
}