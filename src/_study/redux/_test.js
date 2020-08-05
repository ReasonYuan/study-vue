/*
 * @Author: reason
 * @Date: 2020-08-05 15:48:40
 * @LastEditTime: 2020-08-05 16:31:25
 * @FilePath: /study-vue/src/_study/redux/_test.js
 * @Descripttion: 
 */
/*
 * @Author: reason
 * @Date: 2020-08-05 15:48:40
 * @LastEditTime: 2020-08-05 16:10:12
 * @FilePath: /study-vue/src/_study/redux/_test.js
 * @Descripttion: 
 */


import { createStore } from './index';

const initState = { count: 0 };
const reducer = (state = initState, action) => {
  // const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1}
    default: 
      return state;  
  }
}

// const actionCreator = () => {
// }



const store = createStore(reducer);
store.subscribe(() => {
  console.log('------->update:', store.getState())
})
store.dispatch({ type: 'add' })


export default {}


