import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView, Text,ActivityIndicator, View, AsyncStorage } from 'react-native';
import { Buttons} from '../components/Buttons';
import { PrimaryHeader } from '../components/Headers';
import { Content,H3 } from 'native-base';
import {AddUsers,root,Store} from '../config';

class CardlessWithdrawal extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <PrimaryHeader
                LeftText="Back"
                leftOnPress={() => this.props.navigation.navigate("Home")}
                leftIconName="ios-arrow-back"
                TitleText="Withdrawal"
                hasRight={false}
            >
                <Content contentContainerStyle={{ alignItems: 'center', marginTop: 30 }}>
                    <View style={{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <H3>Cardless Withdrawal Page</H3>
                    </View>               
                </Content>
            </PrimaryHeader>
        )
    }
}
export default CardlessWithdrawal;