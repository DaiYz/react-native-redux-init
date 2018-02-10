import {handleActions} from "redux-actions"

const initialState = {
    init:false
};

export default handleActions({
    ACCOUNT_INIT: (state, action) => {
        return Object.assign({init: true},{})
    },

}, initialState);


export const init = () => async(dispatch, getState) => {
    dispatch({
        type:'ACCOUNT_INIT'
    });
    console.log('hello world')
};