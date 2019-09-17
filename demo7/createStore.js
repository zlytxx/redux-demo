export default function createStore(reducer, rewriteCreateStoreFunc) {
  if (rewriteCreateStoreFunc) {
    const newCreateStore =  rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer);
  }

  let state = {};
  const listeners = [];

  function subscribe(listener) {
    listeners.push(listener);

    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => {
      listener();
    });
  }

  function getState() {
    return state;
  }
  
  // 获取初始值
  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState
  };
};

