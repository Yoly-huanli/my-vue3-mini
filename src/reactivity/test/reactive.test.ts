import {reactive} from './../reactive';
describe('reactive',()=>{
  it('创建reactive对象',()=>{
    const a={name:'yoly',age:18}
    const reactiveA= reactive(a)
    expect(a).not.toBe(reactiveA)
    expect(reactiveA.name).toBe('yoly')
  })
})