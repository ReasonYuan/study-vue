/*
 * @Author: reason
 * @Date: 2020-08-05 15:48:40
 * @LastEditTime: 2020-10-12 11:20:51
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


import { createStore, combineReducers } from './index';

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

const initStateB = { name: '' };
const reducerB = (state = initStateB, action) => {
  // const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'set':
      return { ...state, name: action.value}
    default: 
      return state;  
  }
}

// const actionCreator = () => {
// }

const reducers = combineReducers({
  a: reducer,
  b: reducerB
})

const store = createStore(reducers);
store.subscribe(() => {
  console.log('------->update:', store.getState())
})
store.dispatch({ type: 'add' })
store.dispatch({ type: 'set', value: '张三' })


export default {}

