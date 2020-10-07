/*
 * @Author: reason
 * @Date: 2020-10-07 11:28:13
 * @LastEditTime: 2020-10-07 11:38:07
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/page.ts
 * @Descripttion: 
 */

namespace Home {
  class Hader {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = 'This is Header'
      document.body.appendChild(elem)
    }
  }
  
  class Content {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = 'This is Content'
      document.body.appendChild(elem)
    }
  }
  
  
  class Footer {
    constructor () {
      const elem = document.createElement('div')
      elem.innerText = 'This is Footer'
      document.body.appendChild(elem)
    }
  }
  
  
  export class Page {
    constructor() {
      new Hader()
      new Content() 
      new Footer()
    }
  }
}