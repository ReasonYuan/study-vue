
// 数组的类型

// -- 数组里是基础类型
const numberArr = [1, 2, 3]; // 类型推断
const numberArr2 : number[] = [1, 2, 3]; // 类型注释

const stringArr: string[] = ['a', 'b', 'c'];

const undefinedArr : undefined[] = [undefined, undefined]  // 只能放undefined

const arr :(number | string)[] = [2, 'str', '3']
  
// -- 数组里是对象
const girls : {name: string, age: number}[] = [
  {name: '张三', age: 18},
  {name: '李四', age: 20}
]

// type alias 类型别名
type Lady =  {name: string, age: number}
const ladies : Lady[] = [
  {name: '张三', age: 18},
  {name: '李四', age: 20}
]

// 类
class Madam {
  name: string;
  age: number;
}
const madams : Madam[] = [
  {name: '张三', age: 18},
  {name: '李四', age: 20}
]
  


export {}