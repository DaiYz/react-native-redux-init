import React, { PureComponent } from 'react'
import { View, StatusBar, Platform, Linking, Text } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './navigator.config'
import utils from './utils'

class AppLaunch extends PureComponent {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Navigator ref={utils.global.link('navigator')} />
      </View>
    )
  }
}

export default connect(state => ({
  account: state.account
}))(AppLaunch)
