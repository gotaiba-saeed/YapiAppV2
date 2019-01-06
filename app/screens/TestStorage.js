import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView, Text,ActivityIndicator, View, AsyncStorage } from 'react-native';
import { Buttons} from '../components/Buttons';
import { Content,H3 } from 'native-base';
import {AddUsers,root,Store} from '../config';

class TestStorage extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <Content>
                <Text style={{fontSize:34}}>Hello There</Text>
            </Content>
        )
    }
}
export default TestStorage;