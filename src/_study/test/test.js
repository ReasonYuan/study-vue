


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
  console.log(numbers) // => [ 5 ] // "{" 前面的“;”好贱
}
// test4();


function test5() {
  function arrayFromValue(item) {
    return
      [items]; // @@@ 很容易忽略关键字 return 和表达式 [items] 之间的换行。 换行符会使 JavaScript 自动在 return 和 [items] 表达式之间插入分号。 return ;
    }
  console.log(arrayFromValue(10)); // => undefined  又是细节题
}
// test5();

console.log('-----------test')