/*
 * @Author: reason
 * @Date: 2020-09-14 15:10:13
 * @LastEditTime: 2020-09-19 18:11:27
 * @FilePath: /study-vue/src/_study/design/decorator.js
 * @Descripttion: 装饰模式
 */

 
// 程序员
class Coder {
  skill () {
    console.log('--->我是一个程序猿，我：')
    console.log('会编程')
  }
}

// 装饰器，会翻墙
class VPNDecortor {
  constructor(coder) {
    this.coder = coder
  }
  
  skill () {
    this.coder.skill()
    console.log('会翻墙')
  }
}
// 装饰器，会做饭
class CookDecortor {
  constructor(coder) {
    this.coder = coder
  }

  skill () {
    this.coder.skill()
    console.log('会做饭')
  }
}

// 测试 
const coder = new Coder()
const coder2 = new VPNDecortor(coder)
const coder3 = new CookDecortor(coder2)
coder.skill()
coder2.skill()
coder3.skill()


// ========= 装饰函数 =========
function decoratorAfter (fn, afterFn) {
  return function () {
    const ret = fn.apply(this, arguments)
    afterFn.apply(this. arguments)
  }
}

function open () {
  console.log('打开冰箱')
}
function push () {
  console.log('把大象推进去')
}
function close () {
  console.log('关上冰箱')
}

let action = decoratorAfter(open, push)
action = decoratorAfter(action, close)
action() 