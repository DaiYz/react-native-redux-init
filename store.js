import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';

import account from './src/store/init'
// ......
//引入多个reducer


const loggerMiddleware = store => next => action => {
    console.log(action);
    return next(action)
};

const reducers = {
    account
    //与引入的一一对应
};


const middleware = applyMiddleware(
    loggerMiddleware,
    thunk,
);


//reducer合并
const rootReducer = combineReducers({
    ...reducers
});

const store = createStore(rootReducer, {}, middleware);

export {store}
export default store
