import React,{Component} from 'react';
import { StyleSheet, View,TouchableWithoutFeedback} from 'react-native';
import  Home from './Home/Home'
import  LoginScreen from './Account/Login'
import { createNavigationContainer, StackNavigator,NavigationActions} from 'react-navigation';



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
        console.log(this.props);
        return (
            <AppNavigator />
        );
    }
}



