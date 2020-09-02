/*
 * @Author: reason
 * @Date: 2020-09-02 15:19:15
 * @LastEditTime: 2020-09-02 15:28:00
 * @FilePath: /study-vue/src/_study/ts/study11.ts
 * @Descripttion: 类的Getter、Setter和static
 */

// private 保护类型，通过Getter、Setter获取属性

class LSS {
  constructor(private _age: number) {}

  // getter
  get age () {
    return this._age - 10
  } 
  // setter
  set age (age: number) {
    this._age = age;
  }
}

const ds = new LSS(28);
ds.age = 25
console.log(ds.age)


/**
 * ===========================
 * ========== 静态类 ==========
 * ===========================
 */
class Geo {
  public sayLove () {
    return 'I love you'
  }
  static sayGun () {
    return 'gun'
  }
}

const girl = new Geo();
console.log(girl.sayLove())
console.log(Geo.sayGun())