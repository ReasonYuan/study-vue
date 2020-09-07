/*
 * @Author: reason
 * @Date: 2020-09-07 15:16:42
 * @LastEditTime: 2020-09-07 16:01:31
 * @FilePath: /study-vue/src/_study/design/strategy.js
 * @Descripttion: 策略模式
 */

// 例如要写一个计算两个数加减乘除的方法
function countNum (type, num1, num2) {
  if (type === 'add') {
    return num1 + num2
  } else if (type === 'subtract') {
    return num1 - num2
  } else if (type === 'multiply') {
    return num1 * num2
  } else {
    return num1 / num2
  }
}

console.log(countNum('add', 9, 3))       // 12
console.log(countNum('subtract', 9, 3))  // 6
console.log(countNum('multiply', 9, 3))  // 27
console.log(countNum('', 9, 3))          // 3


// ======= 改进如下 ========
let calculateNum = {
  add(num1, num2) {
    return num1 + num2
  },
  subtract(num1, num2) {
    return num1 - num2
  },
  multiply(num1, num2) {
    return num1 * num2
  },
  divide(num1, num2) {
    return num1 / num2
  },
}

console.log(calculateNum.add(6, 2))       // 8
console.log(calculateNum.subtract(6, 2))  // 4
console.log(calculateNum.multiply(6, 2))  // 12
console.log(calculateNum.divide(6, 2))    // 3


// 定义一个策略对象
let priceceStrategy = function() {
  // 内部算法对象 
  let strategy = {
    return20(price){
      return price - parseInt(price / 100) * 20
    },
    return30(price){
      return price - parseInt(price / 100) * 30
    },
    price80(price){
      return price  * 80 / 100
    },
    price90(price){
      return price  * 90 / 100
    }
  }
  // 策略方法调用接口
  return {
    strategyFunction(type, price) {
      return strategy[type] && strategy[type](price)
    },
    // 添加算法
    addStrategy(type, fn){
      strategy[type] = fn
    }
  }
}()

console.log(priceceStrategy.strategyFunction('return20', 200))   // 160
console.log(priceceStrategy.strategyFunction('return30', 300))   // 210
console.log(priceceStrategy.strategyFunction('price80', 100))    // 80
console.log(priceceStrategy.strategyFunction('price90', 100))    // 90
// 添加一个算法: 满100减50
priceceStrategy.addStrategy('return50', (price) => {
  return price - parseInt(price / 100) * 50
})
console.log(priceceStrategy.strategyFunction('return50', 100))  // 50