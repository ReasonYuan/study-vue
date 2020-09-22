/*
 * @Author: reason
 * @Date: 2020-09-21 09:38:52
 * @LastEditTime: 2020-09-22 16:50:40
 * @FilePath: /study-vue/src/_study/ts/study12.ts
 * @Descripttion: 抽象类和只读属性的使用
 */

 // ======= 只读属性 =========
class Person2 {
  public readonly _name: string // 只读属性

  // constructor (public name: string) { }
  constructor (name: string) { 
    this._name = name
  }
}

const person3 = new Person2('hello world')
// console.log(person3.name)
// person._name = 'dsb'
console.log(person3._name)



// ======= 类的继承 =======
abstract class Girl2 {
  abstract skill () : any
}

class Waiter extends Girl2 {
  skill () {
    console.log('擦黑板')
  }
}

class BaseTeacher extends Girl2 {
  skill () {
    console.log('讲课')
  }
}

class seniorTeacher extends Girl2 {
  skill () {
    console.log('教研')
  }
}

