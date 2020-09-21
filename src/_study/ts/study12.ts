/*
 * @Author: reason
 * @Date: 2020-09-21 09:38:52
 * @LastEditTime: 2020-09-21 09:47:33
 * @FilePath: /study-vue/src/_study/ts/study12.ts
 * @Descripttion: 抽象类和只读属性的使用
 */

 // ======= 只读属性 =========
class Person {

  public readonly _name: string // 只读属性

  // constructor (public name: string) { }
  constructor (public name: string) { 
    this._name = name
  }
}

const person = new Person('hello world')
// person._name = 'dsb' 
console.log(person.name)


// ======= 类的继承 =======
abstract class Girl {
  abstract skill ()
}

class Waiter extends Girl {
  skill () {
    console.log('擦黑板')
  }
}

class BaseTeacher extends Girl {
  skill () {
    console.log('讲课')
  }
}

class seniorTeacher extends Girl {
  skill () {
    console.log('教研')
  }
}

