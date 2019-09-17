export default function createStore(reducer, initState) {
  let state = initState;
  const listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
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

  return {
    subscribe,
    dispatch,
    getState
  };
};

