import createStore from './createStore';
import combineReducers from './combineReducers';
import counterReducer from './reducers/counter';
import loggerMiddleware from './middleware/logger'; 
import exceptionMiddleware from './middleware/exception'; 
import timeMiddleware from './middleware/time'; 

const reducer = combineReducers({
  counter: counterReducer
});

const store = createStore(reducer);
const next = store.dispatch;

const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));

store.dispatch({
  type: 'INCREMENT'
});