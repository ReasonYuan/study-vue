/*
 * @Author: reason
 * @Date: 2020-10-07 11:11:33
 * @LastEditTime: 2020-10-07 11:22:48
 * @FilePath: /study-vue/src/_study/ts/study17.ts
 * @Descripttion: 
 */


class SelectGirl {
  constructor(private girls: string[] | number[]) {}

  getGirl (index: number): string | number {
    return this.girls[index]
  }
}

const selectGirl = new SelectGirl(['刘亦菲', '佟亚丽'])
console.log(selectGirl.getGirl(1))



// 类中使用泛型
class SelectGirl2<T> {
  constructor(private girls: T[]) {}

  getGirl (index: number): T {
    return this.girls[index]
  }
}
const selectGirl1 = new SelectGirl2<number>([1, 2])
const selectGirl2 = new SelectGirl2<string>(['刘亦菲', '佟亚丽'])
console.log(selectGirl2.getGirl(1))



// 泛型的约束
class SelectGirl3<T extends number | string> {
  constructor(private girls: T[]) {}

  getGirl (index: number): T {
    return this.girls[index]
  }
}
const selectGirl3 = new SelectGirl3<number>([1, 2])
const selectGirl31 = new SelectGirl3<string>(['刘亦菲', '佟亚丽'])
console.log(selectGirl3.getGirl(1))



// 泛型的继承
interface Gril4 {
  name: string
}
class SelectGirl4<T extends Gril4> {
  constructor(private girls: T[]) {}

  getGirl (index: number): string {
    return this.girls[index].name
  }
}
const selectGirl4 = new SelectGirl4([{name: '刘亦菲'}, {name: '佟亚丽'}])
console.log(selectGirl4.getGirl(1))


