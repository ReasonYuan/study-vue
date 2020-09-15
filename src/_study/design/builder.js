/*
 * @Author: reason
 * @Date: 2020-09-14 15:56:41
 * @LastEditTime: 2020-09-14 16:17:49
 * @FilePath: /study-vue/src/_study/design/builder.js
 * @Descripttion: 建造者模式
 */
// 产品： 汉堡
class Burger {
  constructor(builder) {
    this.size = builder.size
    this.cheeze = builder.cheeze || false
    this.pepperoni = builder.pepperoni || false
    this.lettuce = builder.lettuce || false
    this.tomato = builder.tomato || false
  }

  toString () {
    console.log('该汉堡属性:')
    for (let attr in this) {
      console.log(`${attr}: ${this[attr]}`)
    }
    // console.log(`size:${this.size}, cheeze:${this.cheeze}, pepperoni: ${this.pepperoni}, lettuce: ${this.lettuce}, to`)
  }
}

// 建造者：制作汉堡
class BurgerBuilder {
  constructor(size) {
    this.size = size
  }
  addPepperoni() {
    this.pepperoni = true
    return this
  }
  addLettuce() {
    this.lettuce = true
    return this
  }
  addCheeze() {
    this.cheeze = true
    return this
  }
  addTomato() {
    this.tomato = true
    return this
  }
  build() {
    return new Burger(this)
  }
}

// 直接使用
const burger = new BurgerBuilder(14)
  .addPepperoni()
  .addLettuce()
  .addCheeze()
  .addTomato()
  .build()
burger.toString()
console.log()

// （按照4个部分来）指挥者：指挥各个工作
class Director {
  action = (builder) => {
    builder.addPepperoni();
    builder.addLettuce();
    builder.addCheeze();
    builder.addTomato();
  }
}
// 客户使用方法
const burgerBuilder = new BurgerBuilder(18)
const director = new Director()
director.action(burgerBuilder)
const burger2 = burgerBuilder.build(); // 完成汉堡制作
burger2.toString()