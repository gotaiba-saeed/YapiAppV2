import React, { Component } from "react";
import { StyleSheet, Modal, TextInput, ScrollView, Text,KeyboardAvoidingView, View, Dimensions } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import { DefaultInput, Textbox, CodeInput,AmountInput } from '../components/TextInputs';
import { Title, ErrorText,TextList } from '../components/Texts';
import { Buttons } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content, H3, Button } from 'native-base';

const { width: WIDTH } = Dimensions.get('window')

class TransferFund extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            Amount: 0,
            Acc: '',
            PIN: '',
            ValidAmount: true,
            ValidAcc: true,
            ValidPIN: true,
            modalVisible: false,
        };
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible ,Amount:0,Acc:''});
    }
    ConfirmTransfer=()=>{
        if(this.state.PIN=='' || this.state.PIN.length!=4)
        {
            this.setState({ValidPIN:false});
        }
        else
        {
            this.setState({modalVisible:false});
            //TODO: Apply Fees transaction 
        }
    }
    Transfer = () => {
        var IsValid = true;
        if (this.state.Amount <= 0 ) {
            this.setState({ ValidAmount: false });
            IsValid = false;
        }
        if (this.state.Acc == '') {
            this.setState({ ValidAcc: false });
            IsValid = false;
        }
        if (IsValid) {
            //this.props.navigation.navigate("Home");        
            this.setModalVisible(true);
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
                <Modal
                    animationType="slide"
                    transparent={true}                
                    visible={this.state.modalVisible}
                    >                
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <View style={{ paddingTop:40,backgroundColor:'#333',opacity:0.8,flex:1,position:'absolute',width:'100%',height:'100%' }}>                          
                    </View>  
                        <View style={{
                            width:70,
                            height:70,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:'#fff',                       
                            zIndex:1,  
                            borderWidth:5,
                            borderColor:'#00A572',                          
                            borderRadius:'50%',
                            position:'absolute',
                            top:40}}>
                            <Icon name="exchange" size={30} color="#53acd3"/>
                        </View>                     
                        <Content contentContainerStyle={{backgroundColor:'#fff',alignItems:'center',opacity:1,marginHorizontal:10,paddingTop:50,paddingHorizontal:20,marginTop:80,width:WIDTH-20,flex: 1,marginBottom:30,borderRadius:4}}>
                        <Title Text="Transfer Confirmation"/>
                                <View style={{
                                    marginTop:20,                           
                                    paddingTop:10,
                                    paddingBottom:10,
                                    borderColor:"rgba(83, 172, 211,0.5)",                                   
                                    borderTopWidth:1,
                                    borderBottomWidth:1
                                }}>     
                                <TextList label="Account no. " dataText={this.state.Acc}/>
                                <TextList label="Name" dataText="Huzyfa Saeed Elhussein"/>                                                        
                                <TextList label="Amount" theme="green" dataText={this.state.Amount.toLocaleString()+" SDG"} />
                        </View>
                        <Textbox            
                            theme="PIN"
                            rounded
                            widthSize={100}         
                            keyboardType="numeric"
                            secureTextEntry                                                                 
                            placeholder="Enter PIN"                         
                            onChangeText={(PIN) => this.setState({ PIN, ValidPIN: true })} /> 
                        {this.state.ValidPIN ? null
                            :
                            <ErrorText ErrText="* Invalid PIN" />
                        }
                        <Buttons text="Confirm" theme="green" widthSize={200} hasIcon leftIcon={false} IconName="check-circle-o"  onPress={this.ConfirmTransfer} />
                        <Buttons text="Cancel" outline onPress={()=>{this.setModalVisible(!this.state.modalVisible);}} widthSize={160} />  
                        </Content>                        
                        </View>                                                                                                                                        
                </Modal>
                <Content contentContainerStyle={{ alignItems: 'center', marginTop: 30 }}>

                    <Title Text="Transfer Money" />
                    <View>
                        {/*<DefaultInput
                            placeholder="Enter Amount"
                            IconName="money"
                            keyboardType="numeric"
                            onChangeText={(Amount) => this.setState({ Amount, ValidAmount: true })}
                        />*/}
                        <AmountInput
                            value={this.state.Amount}
                            onChangeText={(Amount) => this.setState({ Amount, ValidAmount: true })}
                        />
                        {this.state.ValidAmount ? null
                            :
                            <ErrorText ErrText="* Invalid amount" />
                        }
                        <DefaultInput
                            placeholder="To which Account"
                            IconName="bank"
                            keyboardType="numeric"
                            onChangeText={(Acc) => this.setState({ Acc, ValidAcc: true })}
                        />
                        {this.state.ValidAcc ? null
                            :
                            <ErrorText ErrText="* Invalid account" />
                        }                                                                
                    </View>                
                        <Buttons text="Transfer" hasIcon widthSize={WIDTH-90} IconName="exchange" theme="primary" onPress={this.Transfer} />                                    
                </Content>
            </PrimaryHeader>

        );
    }
}
export default TransferFund