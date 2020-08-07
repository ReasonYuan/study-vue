/*
 * @Author: reason
 * @Date: 2020-08-07 14:53:02
 * @LastEditTime: 2020-08-07 14:53:22
 * @FilePath: /study-vue/src/_study/redux/redux-thunk.js
 * @Descripttion: redux-thunk
 */

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;