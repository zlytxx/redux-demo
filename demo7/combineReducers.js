export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);

  return (state = {}, action) => {
    const newState = {};

    reducerKeys.forEach(key => {
      const reducer = reducers[key];
      const previousState = state[key];
      const nextState = reducer(previousState, action);

      newState[key] = nextState;
    });

    return newState;
  };
}