var Fn

class ReactiveEffect{
  private _fn:any;
  constructor(fn){
    this._fn = fn
  }
  run(){
    Fn = this
    this._fn()
  }
}

const targetMap = new Map()
export function track(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }
  deps.add(Fn)
}

export function trigger(target,key){
  let FnArr = targetMap.get(target).get(key)
  for(const itemFn of FnArr){
    itemFn.run()
  }
}

export function effect(fn){
 const effectObj = new  ReactiveEffect(fn)
 effectObj.run()
}