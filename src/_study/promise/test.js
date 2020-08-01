


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