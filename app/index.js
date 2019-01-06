import React from "react";
import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar,Text} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import Home from "./screens/Home";
import Login from './screens/Login';
import Profile from './screens/profile';
import Test from "./screens/Test";
import BasicRegister from './screens/BasicRegister';
import CodeActivation from './screens/CodeActivation';
import CardRegister from './screens/CardRegister';
import BillPayments from './screens/BillPayments';
import AccountSummary from './screens/AccountSummary';
import ElectricityForm  from "./screens/ElectricityForm";
import ZainTelecom  from "./screens/ZainTelecom";
import TransferFund from './screens/TransferFund';
import TestAnimated from './screens/TestAnimation';

EStyleSheet.build({
    $PrimaryBlue:'#53acd3',
    $SecondaryBlue:'rgba(83, 172, 211,0.6)',
    $TitleBlue:'rgba(83, 172, 211,0.8)',
    $Red:'#f1646c',
    $LightGreen:'#00A572',
    $Gray:'#6d6d6d',
    $Yellwo:'#fed766',
    $Sky:'#00c8f8',
    $Purple:'#995681',
    $MoneyGreen:'#59c4c5',
    $pink:'#f39cc3',
    $CoolRed:'#ff4c65',
    $CoolGray:'#638ca6',
    $black:"#333333",
    $white:'#FFFFFF',
});

const AppStackNavigator = createStackNavigator({
    Login:Login,
    BasicRegister: BasicRegister,
    Home: Home,
    Test:Test,
    CardRegister: CardRegister,
    CodeActivation: CodeActivation,
    AccountSummary: AccountSummary,
    TransferFund: TransferFund,
    TestAnimated:TestAnimated,
    BillPayments:BillPayments,
    ElectricityForm:ElectricityForm,
    ZainTelecom:ZainTelecom
    //Profile: Profile
},
    {
        headerMode:'none',
        initialRouteName: "BasicRegister",
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
);

export default createAppContainer(AppStackNavigator);
//const AppContainer = createAppContainer(AppStackNavigator);
