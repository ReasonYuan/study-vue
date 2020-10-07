/*
 * @Author: reason
 * @Date: 2020-10-07 11:40:36
 * @LastEditTime: 2020-10-07 14:04:17
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/components.ts
 * @Descripttion: 
 */
// namespace Components {
  // 子命名空间
  // export namespace SubComponents {
  //   export class Test {

  //   }
  // }

  export class Hader {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = 'This is Header'
      document.body.appendChild(elem)
    }
  }
  
  export class Content {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = 'This is Content'
      document.body.appendChild(elem)
    }
  }
  
  
  export class Footer {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = 'This is Footer'
      document.body.appendChild(elem)
    }
  }
// }