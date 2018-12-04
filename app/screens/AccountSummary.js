import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView, Text, View, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import {DefaultInput,PhoneInput,CodeInput} from '../components/TextInputs';
import {Title,TextList} from '../components/Texts';
import { BlockButton, Buttons, VoidButton } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content,H3,Button } from 'native-base';

class AccountSummary extends Component {
    static navigationOptions ={
        header:null,   
      }
      constructor(props) {
        super(props);
        this.state = {
          Code: 0,         
          ValidCode:true,      
        };
      }
      GetVerificationCode=(VerCode)=>{
        var codeLength=VerCode.length;
        this.setState({code:VerCode});
        console.log("Code Length: "+codeLength);
        if(codeLength==4){
            this.props.navigation.navigate('Login')
        }
    }
      
    render() {
        const { navigation } = this.props;
        const paramData = navigation.getParam('data', '912130176');
        return (
            <PrimaryHeader
                LeftText="Back"
                leftOnPress={() => this.props.navigation.navigate("Home")}
                leftIconName="ios-arrow-back"
                TitleText="Acc. Summary"
                hasRight={false}
            >
                <Content>
                    <KeyboardAvoidingView behavior="padding" keyboardShouldPersistTaps='handled' style={{ marginTop: 30 , alignItems: 'center' }}>
                        <Title Text="Account Summary"/>
                        <View style={{
                            marginTop:20,                           
                            padding:10,
                            borderColor:"rgba(83, 172, 211,0.5)",
                            borderRadius:5,
                            borderWidth:1
                        }}>     
                        <TextList label="Balance" theme="green" dataText="23,443.00 SDG"/>
                        <TextList label="Account" dataText="00134881980009111"/>
                        <TextList label="Account Type" dataText="جاري"/>
                        <TextList label="Currency" dataText="SDG"/>

                        </View>                         
                            <Buttons text="Save" theme="primary" hasIcon leftIcon={false} widthSize="80%" onPress={()=>null}>
                                <Icon name="refresh" size={20}/>
                            </Buttons> 
                            <Buttons text="Resend Code" outline onPress={()=>null}/>                       
                                    
                                                                                    
                    </KeyboardAvoidingView>
                </Content>
            </PrimaryHeader>

        );
    }
}
export default AccountSummary