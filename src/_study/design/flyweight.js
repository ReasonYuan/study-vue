/*
 * @Author: reason
 * @Date: 2020-09-14 10:13:28
 * @LastEditTime: 2020-09-18 16:59:55
 * @FilePath: /study-vue/src/_study/design/flyweight.js
 * @Descripttion: 享元模式
 */

// 共享部分
const FlyWeight = {
  moveX: function(x) {
      this.x = x;
  },
  moveY: function(y) {
      this.y = y;
  }
}

// 玩家
const Player = function(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
}
Player.prototype = FlyWeight

// 怪兽
const Monster = function() {
  this.x = 10;
  this.y = 30;
  this.call = '嗷嗷~';
  this.name = '哥斯拉';
}
Monster.prototype = FlyWeight;

// 测试
const player = new Player(30, 10, '#333')
player.moveX(5); player.moveY(-10)

const monster = new Monster()
monster.moveY(-4); monster.moveY(10)

console.log(player)
console.log(monster)