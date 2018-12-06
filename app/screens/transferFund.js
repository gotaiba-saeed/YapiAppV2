import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView,ScrollView, Text, View, Dimensions } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import {DefaultInput,PhoneInput,CodeInput} from '../components/TextInputs';
import {Title,ErrorText} from '../components/Texts';
import { Buttons } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content,H3,Button } from 'native-base';

const {width:WIDTH}=Dimensions.get('window')

class TransferFund extends Component {
    static navigationOptions ={
        header:null,   
      }
      constructor(props) {
        super(props);
        this.state = {
          Amount: '',
          Acc:'',
          PIN:'',
          ValidAmount:true,
          ValidAcc:true,
          ValidPIN:true      
        };
      }
      Transfer=()=>{
          var IsValid=true;
          if(this.state.Amount=='' || this.state.Amount.charAt(0)=='0')
          {
              this.setState({ValidAmount:false});
              IsValid=false;
          }
          if(this.state.Acc=='')
          {
              this.setState({ValidAcc:false});
              IsValid=false;
          }
          if(this.state.PIN=='')
          {
              this.setState({ValidPIN:false});
              IsValid=false;
          }
          if(IsValid)
          {
              this.props.navigation.navigate("Home");
          }
      }
    render() {

        return (
            <PrimaryHeader
                LeftText="Back"
                leftOnPress={() => this.props.navigation.navigate("Home")}
                leftIconName="ios-arrow-back"
                TitleText="Transfer"
                hasRight={false}
            >
                <Content contentContainerStyle={{alignItems: 'center',marginTop: 30}}>
                                  
                        <Title Text="Transfer Money"/>                                                                       
                        <View>
                        <DefaultInput
                                placeholder="Enter Amount"
                                IconName="money"
                                keyboardType="numeric"
                                onChangeText={(Amount)=>this.setState({Amount,ValidAmount:true})}                            
                            />
                            {this.state.ValidAmount ?null
                                :
                                <ErrorText ErrText="* Invalid amount"/>                            
                            }  
                            <DefaultInput
                                placeholder="To which Account"
                                IconName="bank"
                                keyboardType="numeric"
                                onChangeText={(Acc)=>this.setState({Acc,ValidAcc:true})}                            
                            />
                            {this.state.ValidAcc ?null
                                :
                                <ErrorText ErrText="* Invalid account"/>                            
                            }  
                            <DefaultInput
                                placeholder="PIN"
                                IconName="lock"
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
                            <Buttons text="Transfer" hasIcon  IconName="exchange" theme="primary" onPress={this.Transfer}/>
                        </View>                                                                                              
                   
                </Content>
            </PrimaryHeader>

        );
    }
}
export default TransferFund