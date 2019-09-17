import createStore from './createStore';
import combineReducers from './combineReducers';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state;
  }
}

function infoReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}

const state = {
  counter: {
    count: 0
  },
  info: {
    name: ''
  }
};

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

const store = createStore(reducer, state);

store.dispatch({
  type: 'INCREMENT'
});

console.log('------------------------------------');
console.log(store.getState().counter);
console.log('------------------------------------');

store.dispatch({
  type: 'SET_NAME',
  name: '哈哈哈哈'
});

console.log('------------------------------------');
console.log(store.getState().info);
console.log('------------------------------------');