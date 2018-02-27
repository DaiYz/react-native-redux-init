import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View,WebView ,Alert} from 'react-native';
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {init} from '../../store/init'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});




class LoginScreen extends Component{


    render(){
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text>hello</Text>
            </View>
        )
    }

}



export default  connect(
    (store) => ({
        account: store.account,
    }),
    (dispatch) => bindActionCreators({
        init
    }, dispatch)
)(LoginScreen);

