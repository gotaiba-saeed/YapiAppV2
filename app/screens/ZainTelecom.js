import React, { Component } from "react";
import { Text, View, Modal, Dimensions } from 'react-native';
import { PrimaryHeader } from '../components/Headers';
import { Textbox, PhoneInput } from '../components/TextInputs';
import { Title, TextList, ErrorText, CenterTitle } from '../components/Texts';
import SegmentControl from 'react-native-segment-controller';
import { Buttons } from '../components/Buttons';
import uuidv1 from 'uuid/v1';
import Icon from '@expo/vector-icons/FontAwesome';
import {Enums,TranDateTime} from '../config';
import { Content } from 'native-base';

const { width: WIDTH } = Dimensions.get('window');

class ZainTelecom extends Component {

    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            Phone: '',
            PhoneView:'',
            Amount: 0,        
            Package:'Pre-Paid',
            PIN: '',
            ValidPIN: true,
            ValidAmount: true,
            ValidPhone: true,
            modalVisible: false,
        };    
        this.SelectedPackage = this.SelectedPackage.bind(this);
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible, PIN: '', ValidPIN: true });
    }
    SelectedPackage(index){
        index==0?this.setState({Package:'Pre-Paid'}):this.setState({Package:'Post-Paid'})
        this.setState({index});
        console.log("Index: "+index);
    }
    ApplyPhone = () => {
        var IsValid=true;
        if(this.state.Phone==null || this.state.Phone.length!=9 ||this.state.Phone.charAt(0)==0)
        {
            this.setState({ValidPhone:false});
            IsValid=false;
        }
        if(this.state.Amount==0 || this.state.Amount<1)
        {
            this.setState({ValidAmount:false});
            IsValid=false;
        }
        if(IsValid)
        {
            //TODO: get Bill inquery Info 
            if(this.state.Phone.charAt(0)==0)
            {
                this.setState({PhoneView:this.state.Phone.substring(1)})
            }
            else
            {
                this.setState({PhoneView:this.state.Phone})
            }
            this.setModalVisible(true);
        }
    }
    ConfirmPayment = () => {
        if (this.state.PIN == '' || this.state.PIN.length != 4) {
            this.setState({ ValidPIN: false });
        }
        else {           
            this.setState({ modalVisible: false });
            var SelectedPkg=this.state.index;
            var ReqData={
                applicationId:'',
                UUID:uuidv1(),
                tranDateTime:TranDateTime,
                PayeeId:SelectedPkg==0?Enums.PayeeId.ZainTopUp:Enums.PayeeId.ZainBillPayment,
                tranCurrency:'SDG',
                tranAmount:this.state.Amount,
                IPIN:this.state.PIN,
                PAN:'',
            }
            console.log(JSON.stringify(ReqData));
            //Todo: Apply Fees transaction 
        }
    }

    render() {
        return (
            <PrimaryHeader
                LeftText="Back"
                leftOnPress={() => this.props.navigation.navigate("BillPayments")}
                leftIconName="ios-arrow-back"
                TitleText="Zain"
                hasRight={false}
            >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ paddingTop: 40, backgroundColor: '#333', opacity: 0.8, flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
                        </View>
                        <View style={{
                            width: 70,
                            height: 70,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#fff',
                            zIndex: 1,
                            borderWidth: 5,
                            borderColor: '#53acd3',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: 40
                        }}>
                            <Icon name="mobile" size={30} color="#53acd3" />
                        </View>
                        <Content>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                backgroundColor: "#fff",
                                marginHorizontal: 10,
                                paddingVertical: 40,
                                paddingHorizontal: 20,
                                marginTop: 80,
                                width: WIDTH - 20,
                                borderRadius: 4
                            }}>
                                <View style={{
                                    alignItems: 'center'
                                }}>
                                    <CenterTitle Text="Payment Confirmation" />
                                    <View style={{
                                        marginTop: 5,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        borderColor: "rgba(83, 172, 211,0.5)",
                                        borderTopWidth: 1,
                                        borderBottomWidth: 1
                                    }}>
                                        <TextList label="Phone" dataText={"+249 "+this.state.PhoneView} />
                                        <TextList label="Package" dataText={this.state.Package} />
                                        {this.state.index==1?<TextList label="Unbilled Amount" dataText="250 SDG" /> :null }
                                        {this.state.index==1 ?<TextList label="billed Amount" dataText="120 SDG" />  : null}                                    
                                        <TextList label="Total Paying" theme="green" dataText={this.state.Amount + " SDG"} />
                                    </View>
                                    <Textbox
                                        theme="PIN"
                                        rounded
                                        widthSize={100}
                                        maxLength={4}
                                        keyboardType="numeric"
                                        secureTextEntry
                                        placeholder="Enter PIN"
                                        onChangeText={(PIN) => this.setState({ PIN, ValidPIN: true })} />
                                    {this.state.ValidPIN ? null
                                        :
                                        <ErrorText ErrText="* Invalid PIN" />
                                    }
                                    <Buttons text="Confirm" theme="green" widthSize={200} hasIcon leftIcon={false} IconName="check-circle-o" onPress={this.ConfirmPayment} />
                                    <Buttons text="Cancel" outline onPress={() => { this.setModalVisible(!this.state.modalVisible); }} widthSize={160} />

                                </View>
                            </View>

                        </Content>
                    </View>
                </Modal>
                <Content contentContainerStyle={{ marginTop: 30, alignItems: 'center' }}>
                    <Title Text="Zain Telecom" />
                    <View>                    
                        <PhoneInput
                            placeholder="Phone Number"
                            keyboardType="numeric"
                            maxLength={9}
                            onChangeText={(Phone) => this.setState({ Phone, ValidPhone: true })}
                        />
                        {this.state.ValidPhone == false ? <ErrorText ErrText="* Invalid Phone Number" />
                            : null
                        }
                        <Textbox
                            placeholder="Amount"
                            IconName="money"
                            hasIcon
                            keyboardType="numeric"
                            maxLength={4}
                            onChangeText={(Amount) => this.setState({ Amount, ValidAmount: true })}
                        />
                        {this.state.ValidAmount == false ? <ErrorText ErrText="* Invalid amount" />
                            : null
                        }
                        <SegmentControl
                            values={['Pre-Paid', 'Post-Paid']}
                            selectedIndex={this.state.index}
                            height={40}
                            onTabPress={this.SelectedPackage}
                            borderRadius={5}
                            tabStyle={{
                                marginTop:20,
                                borderColor:"#53acd3",                
                            }}
                            tabTextStyle={{
                                color:"#a1a1a1"
                            }}
                            activeTabStyle={{
                                backgroundColor:'#53acd3'
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <Buttons text="Confirm" widthSize={WIDTH - 90} theme="primary" onPress={this.ApplyPhone} />
                        <Buttons text="Cancel" outline onPress={() => this.props.navigation.push("BillPayments")} widthSize={WIDTH - 110} />
                    </View>
                </Content>
            </PrimaryHeader>

        );
    }
}
export default ZainTelecom