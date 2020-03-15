import React, { Component } from "react";
import { Text, View,Modal,Dimensions } from 'react-native';
import { PrimaryHeader } from '../components/Headers';
import {Textbox} from '../components/TextInputs';
import {Title,TextList,ErrorText,CenterTitle} from '../components/Texts';
import {Buttons} from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content} from 'native-base';

const { width: WIDTH } = Dimensions.get('window');

class ElectricityForm extends Component {
    
    static navigationOptions ={
        header:null,   
      }     
      constructor(props) {
        super(props);
        this.state = {
          MeterNo: '',    
          Amount:0,
          PIN: '',
          ValidPIN: true,
          ValidAmount: true,            
          ValidMeter:true,
          modalVisible: false,          
        };
      }   
      setModalVisible(visible) {
            this.setState({ modalVisible: visible,PIN:'',ValidPIN:true });
        }
      ApplyMeter=()=>{
            let _MeterNo=this.state.MeterNo;
            var IsValid=true;
            if(_MeterNo=='' || _MeterNo.length!=11)
            {
                this.setState({ValidMeter:false});
                IsValid=false;
            }
            if (this.state.Amount == '' || this.state.Amount.charAt(0) == '0') {
                this.setState({ ValidAmount: false });
                IsValid = false;
            }
            if(IsValid)
            {
                //fetch happen here
                this.setModalVisible(true);

            }
      }
      ConfirmPayment=()=>{
        if(this.state.PIN=='' || this.state.PIN.length!=4)
        {
            this.setState({ValidPIN:false});
        }
        else
        {
            this.setState({modalVisible:false});
            //Todo: Apply Fees transaction 
        }
    }

    render() {       
        return (
            <PrimaryHeader
                LeftText="Back"
                leftOnPress={() => this.props.navigation.navigate("BillPayments")}
                leftIconName="ios-arrow-back"
                TitleText="Electricity"
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
                            borderColor:'#53acd3',                          
                            borderRadius:'50%',
                            position:'absolute',
                            top:40}}>
                            <Icon name="bolt" size={30} color="#53acd3"/>
                        </View>                     
                        <Content>
                            <View style={{
                                flexDirection:'row',                              
                                justifyContent:'center',
                                backgroundColor:"#fff",
                                marginHorizontal:10,paddingTop:40,paddingHorizontal:20,marginTop:80,width:WIDTH-20,borderRadius:4 
                            }}>
                                <View style={{
                                    alignItems:'center'
                                }}>
                                <CenterTitle Text="Meter Confirmation"/>
                                            <View style={{
                                                marginTop:5,                           
                                                paddingTop:5,
                                                paddingBottom:5,
                                                borderColor:"rgba(83, 172, 211,0.5)",                                   
                                                borderTopWidth:1,
                                                borderBottomWidth:1
                                            }}>
                                            <TextList label="Name" dataText="Saeed Elhussein"/>                                 
                                            <TextList label="Meter No. " dataText={this.state.MeterNo}/>
                                            <TextList label="Due Amount" theme="green" dataText="87.00"/>
                                            <TextList label="Fees Amount" theme="green" dataText="6.5"/>
                                            <TextList label="Total Amount" theme="green" dataText={this.state.Amount+" SDG"}/>                                                         
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
                                    <Buttons text="Confirm" theme="green" widthSize={200} hasIcon leftIcon={false} IconName="check-circle-o"  onPress={this.ConfirmPayment} />
                                    <Buttons text="Cancel" outline onPress={()=>{this.setModalVisible(!this.state.modalVisible);}} widthSize={160} />                                                         

                                </View>
                            </View>
                             
                        </Content>                        
                        </View>                                                                                                                                        
                </Modal>
                <Content contentContainerStyle={{ marginTop: 30, alignItems: 'center' }}>
                    <Title Text="Electricity Meter" />
                    <View>
                    <Textbox
                        placeholder="Meter No."
                        hasIcon
                        IconName="bolt"
                        keyboardType="numeric"
                        maxLength={11}                
                        onChangeText={(MeterNo)=>this.setState({MeterNo,ValidMeter:true})} 
                    />
                    {this.state.ValidMeter == false ? <ErrorText ErrText="* Invalid Meter No." />
                        : null
                    }
                    <Textbox
                        placeholder="Amount"
                        IconName="money"
                        hasIcon
                        keyboardType="numeric"
                        maxLength={4}                
                        onChangeText={(Amount)=>this.setState({Amount,ValidAmount:true})} 
                    />
                    {this.state.ValidAmount == false ? <ErrorText ErrText="* Invalid amount" />
                        : null
                    }
                    </View>
                    <View style={{marginTop:20,alignItems:'center'}}>
                        <Buttons text="Confirm" widthSize={WIDTH-90} theme="primary" onPress={this.ApplyMeter} /> 
                        <Buttons text="Cancel" outline onPress={()=> this.props.navigation.push("BillPayments")} widthSize={WIDTH-110} />                        
                    </View>                     
                </Content>
            </PrimaryHeader>

        );
    }
}
export default ElectricityForm