const createStore = function(initState) {
  let state = initState;
  const listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function changeState(newState) {
    state = newState;
    listeners.forEach(listener => {
      listener();
    });
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState
  };
};

const initState = {
  count: 1
};

const store = createStore(initState);

console.log('before: ', store.getState());

store.subscribe(() => {
  console.log('after: ',store.getState());
});

store.changeState({count: 99});
