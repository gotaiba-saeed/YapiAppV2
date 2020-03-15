import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import { BlockButton, RoundedButton, ServiceButton } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content } from 'native-base';

class Home extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (  
                <PrimaryHeader
                    hasLeft={false}
                    TitleText="YAPI"
                    rightOnPress={() => this.props.navigation.navigate("Login")}
                    rightIconName="ios-log-out"
                >               
                <Content contentContainerStyle={{flex:1}}>                  
                        <View style={styles.ServiceRow}>
                            <ServiceButton IconName="id-card-o" text="Account Summary" onPress={()=>this.props.navigation.push("AccountSummary")}/>
                            <ServiceButton IconName="exchange" text="Transfer Fund" color="#59c4c5" onPress={()=>this.props.navigation.push("TransferFund")}/>
                            <ServiceButton IconName="file-text" text="Bill Payments" color="#995681" onPress={()=>this.props.navigation.push("BillPayments")}/>
                        </View>
                        <View style={styles.ServiceRow}>
                            <ServiceButton IconName="qrcode" text="Scan QR" color="#ff4c65" onPress={()=>this.props.navigation.push("QRCodeScreen")}/>   
                            <ServiceButton IconName="user-plus" text="Beneficiary" color="#fed766" onPress={()=>this.props.navigation.push("Beneficiary")}/>                     
                            <ServiceButton IconName="cubes" text="Service" color="#fa6900" onPress={()=>this.props.navigation.push("Services")}/>
                        </View>  
                        <View style={styles.ServiceRow}>
                            <ServiceButton IconName="money" text="Cardless Withdrawal" color="#0f5959" onPress={()=>this.props.navigation.push("CardlessWithdrawal")}/>
                            <ServiceButton IconName="history" text="Transaction History" color="#f39cc3" onPress={()=>this.props.navigation.push("TranHistory")}/>                        
                            <ServiceButton IconName="gears" text="Settings" color="#638ca6" onPress={()=>this.props.navigation.push("profile")}/>
                        </View>                                                    
                    {/* <BlockButton ButtonText="Account Summary" onPress={()=>this.props.navigation.push("AccountSummary")} >
                        <Icon style={{ color: '#fff' }} name="id-card-o" size={25} />
                    </BlockButton>
                    <BlockButton ButtonText="Transfer Funds" onPress={()=>this.props.navigation.push("TransferFund")}>
                        <Icon style={{ color: '#fff' }} name="refresh" size={25} />
                    </BlockButton> */}
                    <View style={{
                        alignItems:'center',
                        justifyContent:'flex-end',
                        flex:1                    
                        
                    }}>                     
                        <Text style={{
                            fontSize:10,
                            textDecorationLine:'underline',
                            fontStyle:'italic'
                        }}>{'\u00A9'} 2019 YAPI Service</Text>                   
                    </View>                
                </Content>
                </PrimaryHeader>
        );
    }
}
const styles=StyleSheet.create({
    ServiceRow:{
        marginVertical:25,   
        marginHorizontal:15, 
        flexDirection: 'row',
        justifyContent: 'space-between',                                   
    }
})
export default Home;