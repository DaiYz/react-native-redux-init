import React from 'react';
import { Text, View } from 'react-native';
import { Provider, connect } from 'react-redux'
import {  TabNavigator } from 'react-navigation';
import FindScreen from '../Find/Find'
import  LoginScreen from '../Account/Login'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Home = TabNavigator(
    {
        Find: {
            screen: FindScreen,
            navigationOptions:()=>TabOptions('识别','ios-options','ios-options-outline')
        },
        MIne:{
            screen: LoginScreen,
            navigationOptions:()=>TabOptions('我的','ios-options','ios-options-outline')
        }
    },
    {
        tabBarOptions: {
            // tabbar上label的style
            labelStyle: {
                 marginBottom:5
            },
            // tabbar的Iconstyle
            // iconStyle:{
            //     height:35,
            //     width:35,
            //     margin:0
            // },
            // tabbar的style
            style: {
                height:49,
            },

            activeBackgroundColor:'rgba(0,0,0,0.7)',
            inactiveBackgroundColor:'rgba(0,0,0,0.7)',

            inactiveTintColor:'#aaa',
            activeTintColor:'#fff',


            showIcon:true,
            // 是否显示label，默认为true
            pressOpacity:0.3,

            indicatorStyle :{
                height:0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了,
            }
        },
        // tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,

    }
);




/**
 *  TabOptions
 * @param tabBarTitle  //tab文字
 * @param icon         //tab图标名称(未选中)
 * @param focusIcon    //tab图标名称(选中)
 */
const TabOptions = (tabBarTitle,icon,focusIcon) => {
    const tabBarLabel = tabBarTitle;
    const  tabBarIcon=({ focused, tintColor }) => {
        return <Ionicons name={focused?focusIcon:icon} size={25} color={tintColor} />;
    };
    const tabBarOnPress=(e)=>{ console.log(e)};
    return {tabBarLabel,tabBarIcon,tabBarOnPress}
};


export default Home