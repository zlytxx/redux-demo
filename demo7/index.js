import createStore from './createStore';
import combineReducers from './combineReducers';
import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';
import bindActionCreators from './bindActionCreators';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

const store = createStore(reducer);

console.log(store.getState());

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name);
});

function increment() {
  return {
    type: 'INCREMENT'
  }
}

function setName(name) {
  return {
    type: 'SET_NAME',
    name: name
  }
}

const actions = bindActionCreators({ increment, setName }, store.dispatch);

actions.increment();
actions.setName('哈哈哈');