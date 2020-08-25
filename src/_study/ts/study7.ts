/*
 * @Author: reason
 * @Date: 2020-08-25 15:35:19
 * @LastEditTime: 2020-08-25 15:46:49
 * @FilePath: /study-vue/src/_study/ts/study7.ts
 * @Descripttion:  propname(任何属性名) 、 any(任何类型) 、 对方法的约束、 接口的继承
 */
interface Girl3 {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // ? 可选值
  [propname: string]: any; // 任何名称，任何类型
  say(): string; // say方法，返回值必须是string类型
}

// 筛选简历
const screenResume3 = (gril: Girl3) => {
  gril.age < 24 && gril.bust >= 90 && console.log(gril.name + '入围');
  gril.age >= 24 || gril.bust < 90 && console.log(gril.name+'淘汰');
}

// 得到简历
const getResume3 = (gril: Girl3) => {
  console.log(`${gril.name} 年龄:${gril.age} 胸围:${gril.bust}`);
  gril.waistline && console.log(`腰围是: ${gril.waistline}`);
  gril.sex && console.log(`性别是: ${gril.sex}`)
}

const girl3 = {
  name: '小彤',
  age: 18,
  bust: 92,
  sex: '女',
  say() {
    return '你好呀'
  },
  teach() {
    return '教你'
  }
}

screenResume3(girl3); getResume3(girl3);



// 对类的约束
class Jie implements Girl3 {
  name = '';
  age = 18;
  bust = 92;
  say() {
    return 'sb'
  }
}


// 类型继承
interface Teacher extends Girl3 {
  teach(): string
}



// 得到简历
const getSomething = (gril: Teacher) => {
  console.log(`${gril.name} 年龄:${gril.age} 胸围:${gril.bust}`);
  gril.waistline && console.log(`腰围是: ${gril.waistline}`);
  gril.sex && console.log(`性别是: ${gril.sex}`)
}

getSomething(girl3)