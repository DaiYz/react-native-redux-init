import React from 'react'
import { View, TouchableOpacity, DeviceEventEmitter } from 'react-native'
import {Svg, Text} from 'react-native-svg'
export default class FindScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>find</Text>
        <TouchableOpacity style={{marginTop: 20}} onPress={() => {
          this.props.account.add()
        }}>
          <Text>add Badge !!</Text>
        </TouchableOpacity>

        <Svg
          height="60"
          width="200"
        >
          <Text><Text
            fill="none"
            stroke="purple"
            fontSize="20"
            fontWeight="bold"
            x="100"
            y="20"
            textAnchor="middle"
          >STROKED TEXT</Text>12富强民主文明和谐爱国诚信</Text>
        </Svg>
      </View>
    )
  }
}
