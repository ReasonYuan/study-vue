/*
 * @Author: reason
 * @Date: 2020-09-02 14:48:06
 * @LastEditTime: 2020-09-02 14:55:39
 * @FilePath: /study-vue/src/_study/ts/study8.ts
 * @Descripttion: 类的概念和使用 - 继承、重写
 */

class Lady {
  content = 'Hi, World'
  sayHello () {
    return this.content
  }
}
const goddess = new Lady()
console.log(goddess.sayHello())

// 继承
class Girl extends Lady {
  // 重写方法
  sayHello () {
    // const is = super.sayHello() // 调用父类的方法
    return 'Hi 毛线 Hi';
  }

  sayLove () {
    return 'I love you'
  }
}

const girl2 = new Girl()
console.log(girl2.sayHello())
console.log(girl2.sayLove())