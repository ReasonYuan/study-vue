/*
 * @Author: reason
 * @Date: 2020-10-07 11:28:13
 * @LastEditTime: 2020-10-07 14:10:04
 * @FilePath: /study-vue/src/_study/ts/TSWEB/src/page.ts
 * @Descripttion: 
 */

import { Hader, Content, Footer } from './components'

/*
namespace Home {
  export class Page {
    constructor() {
      new Components.Hader()
      new Components.Content() 
      new Components.Footer()
    }
  }
}
*/


export default class Page {
  constructor() {
    new Hader()
    new Content() 
    new Footer()
  }
}