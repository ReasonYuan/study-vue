


function test1 () {
  function fun1() {
    setTimeout(()=>console.log(1))
  }
  
  new Promise((resolve, reject) => {
    fun1();
    console.log(2)
    resolve()
  }).then(() => {
    console.log(3)
  })
  
  console.log(4)
}

// test1(); // 2 4 3 1


function test2() {
  function foo() {
    let a = b = 0; // 局部变a 全局变量b => windows.b = 0;
    a++;
    return a;
  }
  
  foo();
  console.log(typeof a); // => undefined
  console.log(typeof b); // => 0
}
// test2();


function test3() {
  const clothes = ['jacket', 't-shirt'];
  clothes.length = 0;  // => clothes.length = 0 时，会删除 clothes 数组中的所有项s
  console.log(clothes[0]) ; // => undefined
}
// test3()


function test4() {
  const length = 4;
  const numbers = [];
  for (var i = 0; i < length; i++);{
    numbers.push(i + 1);
  }
  console.log(numbers) // => [ 5 ] // { 前面的“;”好贱
}
test4();
