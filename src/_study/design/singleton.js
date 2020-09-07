/*
 * @Author: reason
 * @Date: 2020-09-07 10:30:13
 * @LastEditTime: 2020-09-07 14:55:46
 * @FilePath: /study-vue/src/_study/design/singleton.js
 * @Descripttion: 单例模式
 */

function SetManager (name) {
  this.manager = name;
}

SetManager.prototype.getName = function () {
  console.log(this.manager)
  return this.manager
}

const SingletonSetManager = (function () {
  let manager = null;

  return function(name) {
    if (!manager) manager = new SetManager(name);
  }
  return manager
})()

// 提取出通用的单例
function getSingleton (fn) {
  let instance = null;
  
  return function () {
    if (!instance) {
      instance = fn.apply(this, arguments);
    }
    return instance
  }
}

const mangerSingleton = getSingleton(function (name) {
  const mgs = new SetManager(name);
  return mgs;
})

// mangerSingleton('a').getName();
// mangerSingleton('b').getName();
// mangerSingleton('c').getName();


class Singleton {
  // constructor(name) {
  //   this.name = name
  // }

  constructor(name) {
    // 每次new的时候判断是否存在实例，若存在则直接返回该实例
    if (!Singleton.instance) {
      this.name = name
      Singleton.instance = this;
    }
    return Singleton.instance
  }

  static getInstance(name) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(name)
    }
    return Singleton.instance
  }
}

Singleton.prototype.getName = function() {
  console.log(this.name)
  return this.name
}

const s1 = new Singleton('sa');
const s2 = Singleton.getInstance('sb');
const s3 = Singleton.getInstance('sbb');
const s4 = new Singleton('赵六');
// s1.getName()
// s2.getName()
// s3.getName()
// s4.getName()


function Person (name) {
  if (!Person.instance) {
    this.name = name
    Person.instance = this;
  }
  return Person.instance
}

Person.prototype.getName = function() {
  console.log(this.name)
}

Person.getInstance = (() => {
  let instance = null;

  return function (name) {
    if(!instance) {
      instance = new Person(name)
    }
    return instance
  }
})()

// const p0 = new Person('王五')
// const p1 =  Person.getInstance('张三');
// const p2 =  Person.getInstance('李四');
// p0.getName()
// p1.getName()
// p2.getName()



const PersonSingleton = getSingleton(function (name) {
  const mgs = new Person(name);
  return mgs;
})

PersonSingleton('张三').getName()
PersonSingleton('李四').getName()