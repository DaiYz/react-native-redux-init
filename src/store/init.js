import {handleActions} from "redux-actions"

import {POSTUrlencodeJSON,GETJSON} from '../share/fetch-tool'   //此处对应post请求与get请求


const initialState = {
    init:false
};

export default handleActions({
    //添加不同type，返回相应新的状态
    ACCOUNT_INIT: (state, action) => {
        return Object.assign({init: true},{})
    },
    // .......

}, initialState);


export const init = () => async(dispatch, getState) => {
    dispatch({
        type:'ACCOUNT_INIT'
    });
    /*  ****请求数据***
    try{
     const url = 'www.login.com';
     const username='test';
     const password = '123456';
      //get请求
     const res = await GETJSON(url,{username,password});
      //post 请求
     const res = await POSTUrlencodeJSON(url,{username,password});

    }catch(e){
        console.log(e)
    }

    ******完毕！******

     */

    console.log('hello world')
};