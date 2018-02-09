import {handleActions} from "redux-actions"
import {AsyncStorage,Platform,Alert} from "react-native"

const initialState = {
    init:false
};

export default handleActions({
    ACCOUNT_INIT: (state, action) => {
        return Object.assign({init: true}, action.payload)
    },

}, initialState);