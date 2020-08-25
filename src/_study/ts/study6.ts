/*
 * @Author: reason
 * @Date: 2020-08-25 15:15:26
 * @LastEditTime: 2020-08-25 15:34:28
 * @FilePath: /study-vue/src/_study/ts/study6.ts
 * @Descripttion: interface
 */

// ============= 原始方法 ============ 
// 筛选简历
const screenResume = (name: string, age: number, bust: number) => {
  age < 24 && bust >= 90 && console.log(name + '入围');
  age >= 24 || bust < 90 && console.log(name+'淘汰');
}

// 得到简历
const getResume = (name: string, age: number, bust: number) => {
  console.log(`${name} 年龄:${age} 胸围:${bust}`)
}


screenResume('小丽', 18, 92);
getResume('小彤', 18, 88);

// ============= 采用接口形式 ============ 
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // ? 可选值
}

// 筛选简历
const screenResume2 = (gril: Girl) => {
  gril.age < 24 && gril.bust >= 90 && console.log(gril.name + '入围');
  gril.age >= 24 || gril.bust < 90 && console.log(gril.name+'淘汰');
}

// 得到简历
const getResume2 = (gril: Girl) => {
  console.log(`${gril.name} 年龄:${gril.age} 胸围:${gril.bust}`)
  gril.waistline && console.log(`腰围是: ${gril.waistline}`)
}

const girl = {
  name: '小彤',
  age: 18,
  bust: 92
}

// @ts-ignore
screenResume2(girl); getResume2(girl);



// 对比类型别名
type Girl1 = string 