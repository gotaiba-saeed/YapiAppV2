import React, { Component } from "react";
import { StyleSheet,KeyboardAvoidingView, Text, View, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import {DefaultInput,PhoneInput} from '../components/TextInputs';
import {ErrorText} from '../components/Texts';
import { BlockButton, RoundedButton, VoidButton } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content,H3 } from 'native-base';
import {AddUsers} from '../config'

class BasicRegister extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName:'',
          phone:'',
          email:'',
          password:'',
          ValidFname:true,
          ValidLname:true,
          ValidNumber:true,
          ValidPass:true,
          ValidEmail:true,        
        };
      }
      SaveAccountInfo=()=>{
          var IsValid=false;
        if(this.state.firstName=='' || /\d/.test(this.state.firstName))
        {
            this.setState({ValidFname:false});
        }
        if(this.state.lastName=='' ||  /\d/.test(this.state.lastName))
        {
            this.setState({ValidLname:false});
        }
        if(this.state.phone==null || this.state.phone.length<9)
        {
            this.setState({ValidNumber:false});
        }
        if(this.state.email!='' && !/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/.test(this.state.emai))
        {
            this.setState({ValidEmail:false});
        }
        if(this.state.password==null || this.state.password.length<6)
        {
            this.setState({ValidPass:false});
        }
        if(this.state.ValidPass==true && this.state.ValidFname==true && this.state.ValidLname==true && this.state.ValidNumber==true && this.state.ValidEmail==true)
        {
            IsValid=true;
        }
        ////////////////////////////////////////
        console.log(IsValid);
        if(IsValid)
        {
            var userinfo={
            FirstName:this.state.firstName,
            LastName:this.state.lastName,
            PhoneNumber:this.state.phone,
            Password:this.state.password,   
            Email:this.state.email      
            };
            console.log("Start");
            this.props.navigation.navigate("CodeActivation",{data:userinfo});    
        }
      }
    render() {
        return (
           
                <PrimaryHeader
                    LeftText="Back"
                    leftOnPress={()=>this.props.navigation.navigate("Login")}
                    leftIconName="ios-arrow-back"
                    TitleText="New Account"
                    hasRight={false}
                >
                    <Content>
                    <KeyboardAvoidingView behavior="padding" keyboardShouldPersistTaps='handled' style={{marginTop:30, alignItems: 'center' }}>
                        <H3 style={{alignSelf:'flex-start', marginLeft:10, color:'rgba(83, 172, 211,0.6)'}}>Personal Information</H3>
                        <View>
                            <DefaultInput
                                placeholder="First Name"
                                IconName="id-card-o"
                                returnKeyType="next"
                                inputRef={(input)=> this.FirstNameInput=input}
                                onSubmitEditing={() => this.lastNameInput.focus()} 
                                onChangeText={(firstName)=>this.setState({firstName,ValidFname:true})}                            
                            />
                            {this.state.ValidFname ?null
                                :
                                <ErrorText ErrText="* Invalid first name"/>                            
                            }                        
                                   
                        <DefaultInput
                            placeholder="Last Name"
                            IconName="id-card-o"
                            returnKeyType="next"
                            inputRef={(input)=>this.lastNameInput=input}
                            onSubmitEditing={() => this.PhoneInput.focus()} 
                            onChangeText={(lastName)=>this.setState({lastName,ValidLname:true})}                             
                        />
                        {this.state.ValidLname ?null
                                :
                                <ErrorText ErrText="* Invalid last name"/>                            
                            }                           
                        <PhoneInput
                            placeholder="Phone Number"                    
                            keyboardType="numeric"
                            inputRef={(input)=>this.PhoneInput.focus()}
                            onChangeText={(phone)=>this.setState({phone,ValidNumber:true})}                         
                        />    
                        {this.state.ValidNumber ?null
                                :
                                <ErrorText ErrText="* Invalid phone number"/>                            
                            }                                      
                        <DefaultInput
                            placeholder="Email (Optional)"
                            IconName="envelope-o"
                            returnKeyType="next"
                            onSubmitEditing={() => this.PasswordInput.focus()} 
                            keyboardType="email-address"
                            onChangeText={(email)=>this.setState({email,ValidEmail:true})}                             
                        />
                        {this.state.ValidEmail ?null
                                :
                                <ErrorText ErrText="* Invalid Email"/>                            
                            }   
                        <DefaultInput
                            placeholder="Password"
                            IconName="lock"    
                            inputRef={(input)=>this.PasswordInput=input}                       
                            onChangeText={(password)=>this.setState({password,ValidPass:true})}   
                            secureTextEntry
                            returnKeyType="go"
                        />
                        {this.state.ValidPass ?null
                                :
                                <ErrorText ErrText="* Password must be at least 6 characters"/>                            
                            }  
                            </View>     
                        <View style={{marginTop:20}}>
                            <BlockButton onPress={this.SaveAccountInfo} ButtonText="Next"/>
                        </View>                    
                    </KeyboardAvoidingView>                
                </Content>

                </PrimaryHeader> 
        );
    }
}
export default BasicRegister;