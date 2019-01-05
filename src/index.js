import React, { Component, PureComponent } from 'react'
import { View, StatusBar, ActivityIndicator } from 'react-native'
import { Provider, connect } from 'react-redux'
import Store from './store'
import Launch from './app.launch'
import { PersistGate } from 'redux-persist/lib/integration/react'



export default class App extends Component{
  render() {
  console.log(Store.getState(), '[11111]')
    const LOADING_VIEW = (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="small" color="#333" />
      </View>
    )

    return (
      <Provider store={Store}>
        <PersistGate loading={LOADING_VIEW} persistor={Store.persist}>
          <Launch />
        </PersistGate>
      </Provider>
    )
  }
}