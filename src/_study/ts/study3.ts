
// 函数的返回类型的注解
function getTotal (one: number, two: number) : number {
  return one + two;
}
const total = getTotal(1, 2);


function sayHello() : void {
  console.log('Hello World');
  // return ''
}


// 函数用户执行不完
function errorFunction() : never {
  throw new Error();
  console.log('Hello World');
}
function forNever() : never {
  while(true) {}
  console.log('SB')
}

// 参数是对象1
function add ({ one, two } : {one: number, two: number } ) {
  return one + two;
}
const count = add( {one: 1, two: 2} )



// 参数是对象2
function getNumber({one} : { one: number}) {
  return one;
}
const one = getNumber({one: 1});




export {}