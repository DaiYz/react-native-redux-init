import React from 'react'
import { View, Text, DeviceEventEmitter } from 'react-native'
import utils from '../../utils'
import Stores from '../../store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class AccountScreen extends React.Component {

  render () {
    console.log(this.props)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account!</Text>
      </View>
    )
  }
}

export default connect(state => ({
  account: state.account
}),(dispatch) => bindActionCreators({

}, dispatch)
)(AccountScreen)