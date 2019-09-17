import createStore from './createStore';
import combineReducers from './combineReducers';
import counterReducer from './reducers/counter';
import loggerMiddleware from './middleware/logger'; 
import exceptionMiddleware from './middleware/exception'; 
import timeMiddleware from './middleware/time'; 
import applyMiddleware from './applyMiddleware';

const reducer = combineReducers({
  counter: counterReducer
});

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);
const store = createStore(reducer, rewriteCreateStoreFunc);

store.dispatch({
  type: 'INCREMENT'
});