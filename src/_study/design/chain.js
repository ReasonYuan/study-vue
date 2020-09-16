/*
 * @Author: reason
 * @Date: 2020-09-15 17:38:42
 * @LastEditTime: 2020-09-16 19:52:44
 * @FilePath: /study-vue/src/_study/design/chain.js
 * @Descripttion: 责任链模式
 */

 
// 流程
function Handler() {
  this.next = null;
  this.setNext = function(_handler) {
      this.next = _handler;
  };
  this.handleRequest = function(money) {
  }
};

// 采购部
function CGBHandler = function() {}
CGBHandler.prototype = new Handler();
CGBHandler.prototype.handleRequest = function(money) {
// 处理权限最多10000
  if (money < 10000) {
      console.log("同意");
  } else {
      console.log("金额太大，只能处理一万以内的采购");
      if (this.next) {
          this.next.handleRequest(money);
      }
  }
};

// 总经理
function ZJLHandler = function() {}
ZJLHandler.prototype = new Handler();
ZJLHandler.prototype.handleRequest = function (money) {
  if (money < 100000) {
      console.log("十万以内的同意");
  } else {
      console.log("金额太大，只能处理十万以内的采购");
      if (this.next) {
          this.next.handleRequest(money);
      }
  }
};

// 董事长
function DSZHandler = function() {}
DSZHandler.prototype = new Handler();
DSZHandler.prototype.handleRequest = function(money) {
  if (money >= 100000) {
      console.log("十万以上的我来处理");
  }
};

// 客户端使用
function Client() {
  var cgb = new CGBHandler();
  var zjl = new ZJLHandler();
  var dsz = new DSZHandler();
  cgb.setNext(zjl);
  zjl.setNext(dsz);

  cgb.handleRequest(800000);
}