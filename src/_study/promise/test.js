


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
  clothes.length = 0;
  console.log(clothes[0]) ; // => undefined
}
test3()


