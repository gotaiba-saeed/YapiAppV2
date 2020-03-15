import React,{Component} from "react";
import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar,KeyboardAvoidingView,Text,View,TouchableOpacity} from 'react-native';
import { Container,ContainerTop } from '../components/Container';
import {Logo} from '../components/Logo';
import {DefaultInput} from '../components/TextInputs';
import {BlockButton,RoundedButton,VoidButton} from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import {H1,Content} from 'native-base';

class Login extends Component {
    static navigationOptions ={
        header:null,
        gesturesEnabled: false,
      }
      Signin=()=>{
        this.props.navigation.navigate('Home');
      }
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="default" />
                <KeyboardAvoidingView behavior="padding" keyboardShouldPersistTaps='handled' style={{ alignItems: 'center' }}>
                    <H1 style={{ color: "#6b6b6b", fontWeight: 'bold' }}>Welcome</H1>
                    <Logo />
                    <DefaultInput IconName="user-o"
                        placeholder="Username"
                    />
                    <DefaultInput IconName="lock"
                        placeholder="Password"
                        secureTextEntry
                    />
                    <TouchableOpacity>
                        <Text style={{ color: "#53acd3", marginVertical: 10 }}>Forget Password ?</Text>
                    </TouchableOpacity>
                    <RoundedButton onPress={this.Signin} ButtonText="Login">
                    </RoundedButton>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("BasicRegister")}>
                        <Text style={{ color: "#53acd3", marginVertical: 10, textDecorationLine: 'underline' }}>Create Account</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}
export default Login