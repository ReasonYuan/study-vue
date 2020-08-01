
// type annotation 类型注解
// type inference 类型推断


// 类型注解 -> 明确类型
declare let count: number;
count = 123;


// 类型推断 -> 不明确类型，自己判断出来
let countInference = 124;
let name = '张三'

//  ===== 推断 ====>
let one = 1;
let two = 2;
let three = one + two;

// 不能推断出类型，所以是any, 因此要注解上类型
function getTotal (one: number, two: number) {
  return one + two;
}

const total = getTotal(1 ,2);

// 自动推断出类型，不用注解
const girl = {
  name: '刘亦菲',
  age: 20
}










export {}