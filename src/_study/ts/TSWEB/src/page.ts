/*
 * @Author: reason
 * @Date: 2020-10-07 11:28:13
 * @LastEditTime: 2020-10-07 13:49:53
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/page.ts
 * @Descripttion: 
 */

namespace Home {
 
  
  
  export class Page {
    constructor() {
      new Components.Hader()
      new Components.Content() 
      new Components.Footer()
    }
  }
}