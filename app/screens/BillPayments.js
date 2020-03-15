import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import { BlockButton, RoundedButton, BillButton } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content } from 'native-base';

class BillPayments extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (  
                <PrimaryHeader
                LeftText="Back"
                leftOnPress={() => this.props.navigation.navigate("Home")}
                leftIconName="ios-arrow-back"
                TitleText="Payments"
                hasRight={false}
                >               
                <Content contentContainerStyle={{flex:1}}>                  
                    <View style={{
                        flexDirection:'row',
                        flexWrap:'wrap',
                        height:100                    
                    }}>
                        <BillButton ImageSource={require('../img/zainlogo.png')} color="#995681" text="Zain" onPress={()=>this.props.navigation.push('ZainTelecom')} />
                        <BillButton ImageSource={require('../img/mtnlogo.png')} color="#ffcd13" text="MTN" onPress={()=>this.props.navigation.push('MTNTelecom')} />
                        <BillButton ImageSource={require('../img/Sudanilogo.jpg')} color="#00c8f8" text="Sudani" onPress={()=>this.props.navigation.push('SudaniTelecom')} />
                        <BillButton ImageSource={require('../img/eleclogo.png')} color="#59c4c5" text="Electricity" onPress={()=>this.props.navigation.push('ElectricityForm')} />
                        <BillButton ImageSource={require('../img/govlogo.png')} color="#ff4c65" text="Government Bills" />
                        <BillButton hasImage={false} IconName="graduation-cap" color="#638ca6" text="Higher Education" />
                        {/* <View style={{
                            flex:1,
                            alignItems:'center',
                            backgroundColor:'rgba(83, 172, 211,0.6)',
                            height:130,
                            borderWidth:1,
                            borderColor:"#fff",
                            paddingVertical:10                                                                   
                        }}>
                            <Image  style={{
                                width:50,
                                height:50,
                                resizeMode:'contain'                            
                            }} source={require('../img/mtnlogo.png')}/>
                            <Text style={{
                                fontSize:20,
                                color:'#fff',
                                fontWeight:'bold'                                
                            }}>MTN</Text>
                        </View> */}
                    </View>                                                     
                </Content>
                </PrimaryHeader>
        );
    }
}
// const styles=StyleSheet.create({
//     ServiceRow:{
//         marginVertical:25,    
//         flexDirection: 'row',
//         justifyContent: 'space-between',                                   
//     }
// })
export default BillPayments;