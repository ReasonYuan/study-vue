/*
 * @Author: reason
 * @Date: 2020-08-06 17:11:35
 * @LastEditTime: 2020-08-06 17:16:33
 * @FilePath: /study-vue/src/_study/redux/combineReducers.js
 * @Descripttion: combineReducers
 */

const combineReducers = (reducers) => {

  const finalState = { };
  const reducer = (state, action) => {

    for (const p in reducers) {
      finalState[p] = reducers[p](state[p], action);
    }

    return finalState;
  }

  return reducer; // 返回一个reducer(reducer是一个纯函数)
};


export default combineReducers;