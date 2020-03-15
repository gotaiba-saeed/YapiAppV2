import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView, Text, View,ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import {DefaultInput,PhoneInput,CodeInput} from '../components/TextInputs';
import {ErrorText,NumberText} from '../components/Texts';
import { BlockButton, RoundedButton, VoidButton } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content,H3,Button } from 'native-base';

class CodeActivation extends Component {
    static navigationOptions ={
        header:null,
        gesturesEnabled: false,
      }
      constructor(props) {
        super(props);
        this.state = {
          Code: 0,         
          ValidCode:true, 
          UserInfo:this.props.navigation.state.params.userInfo,
          RegType:this.props.navigate.state.params.userInfo.RegType  
        };
      }
      GetVerificationCode=(VerCode)=>{
        var codeLength=VerCode.length;
        this.setState({code:VerCode});
        console.log("Code Length: "+codeLength);
        if(codeLength==4){
            if(this.state.RegType=='Account')
                this.props.navigation.navigate('CardRegister',{userInfo:this.state.UserInfo})
            else
            {
                //TODO: Apply Authintication Token
                this.props.navigation.navigate('Home')
            }
        }
        ResendCode=()=>{
            //TODO: Apply fetch api to resend code
        }
    }
      
    render() {
        //const { navigation } = this.props.navigation.state;
        //const paramData = navigation.getParam('data', '912130176');
        return (
            <PrimaryHeader
                LeftText="Back"
                leftOnPress={() => this.props.navigation.navigate("BasicRegister")}
                leftIconName="ios-arrow-back"
                TitleText="Verify"
                hasRight={false}
            >
                <Content>
                    <KeyboardAvoidingView behavior="padding" keyboardShouldPersistTaps='handled' style={{ marginTop: 30 , alignItems: 'center' }}>
                        
                        <Text style={{textAlign:'center'}}>
                            A verification code has been sent to the phone number you provided
                        </Text>                       
                        <NumberText NumText={this.state.UserInfo.PhoneView} />
                        <View style={{marginTop: 20,alignItems: 'center'}}>
                            <Text>Verification Code</Text>
                            <CodeInput placeholder="4 digit"
                             keyboardType="numeric"
                             onChangeText={VerCode=>this.GetVerificationCode(VerCode)} />                              
                        </View>                                
                        <View>
                            <VoidButton ButtonText="Resend Code" onPress={this.ResendCode}/>
                        </View>                                                                            
                    </KeyboardAvoidingView>
                </Content>
            </PrimaryHeader>

        );
    }
}
export default CodeActivation