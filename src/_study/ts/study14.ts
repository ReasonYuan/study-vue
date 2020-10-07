/*
 * @Author: reason
 * @Date: 2020-10-07 10:30:28
 * @LastEditTime: 2020-10-07 10:50:35
 * @FilePath: /study-vue/src/_study/ts/study14.ts
 * @Descripttion: 联合类型和类型保护 ===> 联合类型，里面有多个类型
 */
interface Waiter {
  mo: boolean;
  say: () => {}
}
interface Teacher {
  mo: boolean;
  skill: () => {}
}

function judgeWho (animal: Waiter | Teacher) {
  // 需要判断类型
  // animal.say()
}

// 第一种方法：as
function judgeWho1 (animal: Waiter | Teacher) {
  // 断言的方法
  if(animal.mo) {
    (animal as Teacher).skill()
  } else {
    (animal as Waiter).say()
  }
}

// 第二种方法：in
function judgeWho2 (animal: Waiter | Teacher) {
  // 断言的方法
  if("skill" in animal) {
    animal.skill()
  } else {
    animal.say()
  }
}

// 第三种 typeof 判断类型
function add (first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === "string") {
    return `${first}${second}`
  } else {
    return first + second
  }
}

class NumberObject {
  count: number;
}

// 第四种 instanceof
function addObj(first: object | NumberObject, second: object | NumberObject) {
  if (first instanceof NumberObject && second instanceof NumberObject) {
    return first.count + second.count 
  }
  return 0
}