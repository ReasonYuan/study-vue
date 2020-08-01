

// 入门
function demo () {
  let web: string = 'Hello World';
  console.log(web);
}
// demo();


// ================= 静态类型 ====================

// 静态类型 Static Typing： 定义后就不能改变了
let count: number = 1;

// 自定义静态类型
interface Girl {
  uname: string,
  age: number
}
// 使用自定义静态类型
const xiaohong : Girl = {
  uname: '刘亦菲',
  age: 18
}
console.log(xiaohong.age)


// 基础(静态)类型 -  number, string, null, undefined, boolean, void, symbol
const taotal: number = 918; 
const uname: string = 'man';


// 对象(静态)类型 普通对象类型， 数组类型， 类类型， 函数类型
const meiGirl: {
  name: string,
  age: number
} = {
  name: '刘亦菲',
  age: 18
}
const girls : string [] = [ '刘亦菲', '娜娜', '扎娜' ] // 数组也是对象类型

class Person {}
const man: Person = new Person() // 对象形式的

const seeMan : () => string = () => 'sb'; // 函数形式的对象类型

