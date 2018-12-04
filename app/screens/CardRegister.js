import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView, Text, View, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import {DefaultInput,PhoneInput,CodeInput} from '../components/TextInputs';
import {ErrorText,NumberText} from '../components/Texts';
import { BlockButton, RoundedButton, VoidButton } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content,H3,Button } from 'native-base';

class CardRegister extends Component {
    static navigationOptions ={
        header:null,
        gesturesEnabled: false,
      }
      constructor(props) {
        super(props);
        this.state = {
          PAN: '',
          PANview:'',
          ExpDate:'',
          PIN:'',         
          ValidCard:true,
          ValidExp:true,
          ValidPIN:true,      
        };
      }
      CardEntry=(text)=>{
        this.setState({ ValidCard: true });
        let formattedText = text.split(' ').join('');
        if (formattedText.length > 0) {
          formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        let validPAN=formattedText;
        validPAN=validPAN.replace(/\s/g,'');
        this.setState({ PANview: formattedText });
        this.setState({PAN:validPAN});
        return formattedText;
      }
      SubmitCard=()=>{
        let _pan=this.state.PAN;
        let _exp=this.state.ExpDate;
        let _pin=this.state.PIN;
        let IsValid=true;

        if(_pan=='' || _pan.length!=16)
        {
            this.setState({ValidCard:false});
            IsValid=false;
        }
        if(_exp=='' || _exp.length!=4)
        {
            this.setState({ValidExp:false});
            IsValid=false;
        }
        if(_pin=='' || _pin.length!=4)
        {
            this.setState({ValidPIN:false});
            IsValid=false;
        }
        if(IsValid)
        {
            this.props.navigation.navigate('Home');
        }    
      }
      
    render() {
        const { navigation } = this.props;
        const paramData = navigation.getParam('data', '912130176');
        return (
            <PrimaryHeader
                RightText="Cancel"
                rightOnPress={() => this.props.navigation.navigate("Login")}                
                TitleText="Card Info"
                hasLeft={false}
            >
                <Content>
                    <KeyboardAvoidingView behavior="padding" keyboardShouldPersistTaps='handled' style={{ marginTop: 30 , alignItems: 'center' }}>
                        <H3 style={{alignSelf:'flex-start', marginLeft:10, color:'rgba(83, 172, 211,0.6)'}}>
                        Card Information</H3>
                        <View>
                            <DefaultInput
                                placeholder="Card Number"
                                IconName="credit-card"                            
                                keyboardType="numeric"
                                maxLength={19}
                                value={this.state.PANview}
                                onChangeText={this.CardEntry}                            
                            />
                            {this.state.ValidCard ?null
                                :
                                <ErrorText ErrText="* Invalid card number"/>                            
                            }                        
                                   
                        <DefaultInput
                            placeholder="Expiry (MMYY)"
                            IconName="calendar-o"
                            keyboardType="numeric"
                            maxLength={4}
                            onChangeText={(ExpDate)=>this.setState({ExpDate,ValidExp:true})}                             
                        />
                        {this.state.ValidExp ?null
                                :
                                <ErrorText ErrText="* Invalid expiry date"/>                            
                            }                                                                          
                        <DefaultInput
                            placeholder="PIN"
                            IconName="lock"
                            maxLength={4}
                            keyboardType="numeric"
                            secureTextEntry
                            onChangeText={(PIN)=>this.setState({PIN,ValidPIN:true})}                             
                        />
                        {this.state.ValidPIN ?null
                                :
                                <ErrorText ErrText="* Invalid PIN"/>                            
                            }                           
                            </View>     
                        <View>
                            <BlockButton onPress={this.SubmitCard} ButtonText="Confirm"/>
                        </View>
                        </KeyboardAvoidingView>                    
                </Content>
            </PrimaryHeader>

        );
    }
}
export default CardRegister