import React,{Component} from 'react';
import { Text, View } from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';
import home from './routes/home'
import Home from './components/Home/Home'



renderScene = (router) => {
    try {
        const {routes,init} = this.props;
        const component = routes[router];
        const combinedPassProps = Object.assign({init});
        return React.createElement(component, combinedPassProps)
    } catch(e){
        console.log(e)
    }
};


const Router =TabNavigator({
    Home: { screen: Home},
});


export default Router