import React,{Component} from 'react';
import { StyleSheet, View,TouchableWithoutFeedback} from 'react-native';
import  Router  from './Route';
import  Home from './components/Home/Home'
import  LoginScreen from './components/Account/Login'
import { addNavigationHelpers, StackNavigator } from 'react-navigation';



export const AppNavigator = StackNavigator({
    home: {
        screen: Home,
        navigationOptions:{
            header:null
        }
    },
    Login: {
        screen:LoginScreen,
        navigationOptions:{
            header:null
        }

    },
});


 export default class Wrapper  extends Component {

    componentWillMount = () => {
        const {init} = this.props;
        init()
    };

    render() {
        const {routes,init,account}=this.props;
        return (
            <AppNavigator
                account={account}
            />
        );
    }
}



