import createStore from './createStore';
import combineReducers from './combineReducers';
import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

const store = createStore(reducer);

console.log('------------------------------------');
console.log(store.getState());
console.log('------------------------------------');