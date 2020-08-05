

export default createStore = (reducer) => {
  
  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.')
  }


  let store = {}
  const listeners = [];

  // 更新数据
  const dispatch = (action) => {
    store = reducer(action);
  }

  // 添加订阅者
  const subscribe = (listener) => {
    if (listener && !listeners.includes(listener)) listeners.push(listener);
  }

  // 获取当前Store
  const getState = () => {
    return store;
  }


}