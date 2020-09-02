/*
 * @Author: reason
 * @Date: 2020-09-02 15:10:43
 * @LastEditTime: 2020-09-02 15:19:22
 * @FilePath: /study-vue/src/_study/ts/study10.ts
 * @Descripttion: 类的构造函数
 */

class LS {
  // public name: string;
  // constructor (name: string) {
  //   this.name = name
  // }

  // 简化写法
  constructor(public name: string) {} 
}

const person = new LS('张三');
console.log(person.name)


// 继承父类
class Teacher extends LS {
  constructor(public age: number) {
    super('老师') // 必须调用父类的构造函数 
  }
}
const teacher = new Teacher(18);
console.log(teacher.name + ' ' + teacher.age)