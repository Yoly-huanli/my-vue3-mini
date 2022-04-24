import {effect} from './../effect';
import {reactive} from './../reactive';

describe('effect',()=>{
  
  it('efffect执行',()=>{
    const a={name:'yoly',age:1}
    const reactiveA= reactive(a)
    let nextA
    effect(()=>{
      nextA = reactiveA.age + 5
    })
    expect(nextA).toBe(6)
    reactiveA.age ++ 
    expect(nextA).toBe(7)
  })
})