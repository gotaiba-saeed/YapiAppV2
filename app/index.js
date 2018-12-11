import React from "react";
import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar,Text} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import Home from "./screens/Home";
import Login from './screens/Login';
import Profile from './screens/profile';
import BasicRegister from './screens/BasicRegister';
import CodeActivation from './screens/CodeActivation';
import CardRegister from './screens/CardRegister';
import AccountSummary from './screens/AccountSummary';
import TransferFund from './screens/TransferFund';
import TestAnimated from './screens/TestAnimation';

EStyleSheet.build({
    $PrimaryBlue:'#53acd3',
    $SecondaryBlue:'rgba(83, 172, 211,0.6)',
    $TitleBlue:'rgba(83, 172, 211,0.8)',
    $Red:'#A63232',
    $LightGreen:'#00A572',
    $Gray:'#6d6d6d',
    $black:"#333333",
    $white:'#FFFFFF',
});

const AppStackNavigator = createStackNavigator({
    Login:Login,
    BasicRegister: BasicRegister,
    Home: Home,
    CardRegister: CardRegister,
    CodeActivation: CodeActivation,
    AccountSummary: AccountSummary,
    TransferFund: TransferFund,
    TestAnimated:TestAnimated
    //Profile: Profile
},
    {
        headerMode:'none',
        initialRouteName: "TestAnimated",
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
);

export default createAppContainer(AppStackNavigator);
//const AppContainer = createAppContainer(AppStackNavigator);
