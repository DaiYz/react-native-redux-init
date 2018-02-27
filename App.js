/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Wrapper from './src/components/Wrapper'
import store from './store'
import {init} from './src/store/init'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  routes from './src/routes'

const ConnectedWrapper = connect(

  (store) => ({
      account: store.account,
  }),

  (dispatch) => bindActionCreators({
  init
  }, dispatch)

)(Wrapper);


class App extends Component {

    render () {
        return (
            <Provider store={store}>
              <ConnectedWrapper routes={routes} />
            </Provider>
        );
    }
}

export default App