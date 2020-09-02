/*
 * @Author: reason
 * @Date: 2020-09-02 14:58:49
 * @LastEditTime: 2020-09-02 15:05:15
 * @FilePath: /study-vue/src/_study/ts/study9.ts
 * @Descripttion: 类的访问类型 : private protected public
 */

/**
 * 类的访问类型
 * public: 类的内部和外部都可以使用
 * private: 只能类的内部使用，不能内的外部使用
 * protected: 只能类的内部使用，不能内的外部使用
 * 
 */


class Person {
  name: string; // => public name: string (默认为public)
  protected nickName: string = 'sb';

  public sayHello () {
    console.log(this.name + ' say hello')
  }
}

const person = new Person();
person.name = 'TaiDi';
console.log(person.name)

person.sayHello();



class Teacher extends Person {
  public sayBye () {
    console.log(this.nickName + 'bye')
  }
}