/*
 * @Author: reason
 * @Date: 2020-09-15 14:04:54
 * @LastEditTime: 2020-09-15 14:18:03
 * @FilePath: /study-vue/src/_study/design/prototype.js
 * @Descripttion: 原型模式
 */

// ===== 使用 Object.create(prototype, optionalDescriptorObjects)  =====
const languagePrototype = {
  type: 'Java',
  getType: function () {
    console.log(this.type + '是最好的语音')
  }
}

const js = Object.create(languagePrototype, {
  type: { value: 'JavaScript' }
})

js.getType()


// ==== Prototype ====
const lngPrototype = {
  init: function (language) {
    this.language = language || 'Java'
  },
  getType: function () {
    console.log(`我觉得 ${this.language} 是世界上最好的语言`)
  }
}
function javaScript (lng) {
  function F() {}
  F.prototype = lngPrototype;
  const f = new F();
  f.init(lng)
  return f;
}

const lng = javaScript('JavaScript')
lng.getType()