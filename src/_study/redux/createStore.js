

export default function (reducer, preloadedState) {

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.')
  }


  let state = preloadedState
  const listeners = [];

  // 更新数据
  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach(listener => listener())
  }

  // 添加订阅者
  const subscribe = (listener) => {
    if (listener && !listeners.includes(listener)) listeners.push(listener);
  }

  // 获取当前Store
  const getState = () => {
    return state;
  }

  return {
    getState,
    dispatch,
    subscribe
  }

}