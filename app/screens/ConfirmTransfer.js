import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView, Text, View, ScrollView,RefreshControl } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import {DefaultInput,PhoneInput,CodeInput} from '../components/TextInputs';
import {Title,TextList} from '../components/Texts';
import { BlockButton, Buttons, VoidButton } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content,H3,Button } from 'native-base';


class ConfirmTransfer extends Component {
    
    static navigationOptions ={
        header:null,   
      }
      constructor(props) {
        super(props);
        this.state = {
            refreshing: false,    
        };
      }
      _onRefresh = () => {
        this.setState({refreshing: true});     
        setTimeout(() => {
            this.setState({refreshing:false});
        }, 3000);   
      }
        
      
    render() {       
        return (
                <Content contentContainerStyle={{marginTop:30,alignItems:'center'}}>            
                    <Title Text="Account Summary"/>
                    <View style={{
                        marginTop:20,                           
                        padding:10,
                        borderColor:"rgba(83, 172, 211,0.5)",
                        borderRadius:5,
                        borderWidth:1
                    }}>     
                    <TextList label="" theme="green" dataText="23,443.00 SDG"/>
                    <TextList label="Account" dataText="00134881980009111"/>
                    <TextList label="Account Type" dataText="جاري"/>
                    <TextList label="Currency" dataText="SDG"/>
                    </View>                                                                                                                                                                                      
                </Content>    
        );
    }
}
export default ConfirmTransfer