import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView, Text,ActivityIndicator, View, AsyncStorage } from 'react-native';
import { Buttons} from '../components/Buttons';
import { Content,H3 } from 'native-base';
import {AddUsers,root,Store} from '../config';

class Test extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <Content>
                <View style={{
                    flexDirection:'row',                              
                    justifyContent:'center',
                    backgroundColor:"#333"                    
                }}>
                    <View style={{
                        
                    }}>
                        <Text style={{
                        fontSize:24,
                        color:"#fff"
                    }}>Hello</Text>
                    <Text style={{
                        fontSize:24,
                        color:"#fff"
                    }}>Hello</Text>
                    <Text style={{
                        fontSize:24,
                        color:"#fff"
                    }}>Hello</Text>
                    <Text style={{
                        fontSize:24,
                        color:"#fff"
                    }}>Hello</Text>
                    <Text style={{
                        fontSize:24,
                        color:"#fff"
                    }}>Hello</Text>
                    <Text style={{
                        fontSize:24,
                        color:"#fff"
                    }}>Hello</Text>
                    </View>
                    
                </View>
            </Content>
        )
    }
}
export default Test;