/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Wrapper from './src/Wrapper'
import store from './store'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux'

const ConnectedWrapper = connect(

  (store) => ({
      init: store.init,
  }),

  (dispatch) => bindActionCreators({

  }, dispatch)

)(Wrapper);


class App extends Component {

    render () {
        return (
            <Provider store={store}>
              <ConnectedWrapper />
            </Provider>
        );
    }
}

export default App