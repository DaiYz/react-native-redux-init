import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import account from './account'
// ......
//引入多个reducer

const persistConfig = {
  key: 'v0.0.5',
  storage: storage,
  blacklist: ['account']

}

const logMiddleware = store => next => action => {
  console.log(`['action']${action}`);
  return next(action)
};

const reducers = {
  account
  //与引入的一一对应
};


const middleware = applyMiddleware(
  logMiddleware,
  thunk,
);


//reducer合并
const rootReducer = combineReducers({
  ...reducers
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, {}, middleware);

store.persist = persistStore(store)

export default store
