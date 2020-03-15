import React,{Component} from 'react';
import {StyleSheet,Dimensions,KeyboardAvoidingView,View,Modal,TextInput, ActivityIndicator,Alert,Text,TouchableOpacity} from 'react-native';
import { PrimaryHeader } from '../components/Headers';
import { Textbox, DefaultInput,AmountInput } from '../components/TextInputs';
import { BlockButton, RoundedButton, VoidButton, BillButton } from '../components/Buttons';
import SegmentControl from 'react-native-segment-controller';
import { ErrorText,CenterTitle,TextList } from '../components/Texts';
import { Buttons } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import uuidv1 from 'uuid/v1';
import { BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import md5 from 'md5';
import { Content, H3 } from 'native-base';
import { TextInputMask } from 'react-native-masked-text'
import { AddUsers, root, Store } from '../config';
import { value } from 'react-native-extended-stylesheet';

const { width: WIDTH } = Dimensions.get('window');
var QRCodeData=null;
class QRCodeScreen extends Component{
    static navigationOptions={
        header:null 
    }
    constructor(props){
        super(props);       
        this.state={
            index:1,
            Amount: '',        
            Page:'Scan',
            PIN: '',
            Name:'',
            Account:'',        
            ValidPIN: true,
            modalVisible: false,
            QR:null,
            generate:false,
            hasCameraPermission: null,
            Scanned:false,
        };
        this.SelectedPage=this.SelectedPage.bind(this);
        
    }
    /*TODO:
      - Fetch data from server so you can assign Account, Name per logged user.
    */
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
        this.setState({Account:1423982,Name:'Huzyfa Saeed'}); // This should come from Server.    
        }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible,Scanned:false,Amount:'0' });
    }
    SelectedPage(index){
        index==0?this.setState({Package:'Scan'}):this.setState({Package:'Generate'})
        this.setState({index});
    }
     generateQRCode=()=>{   
       this.setState({generate:true});   
      QRCodeData={
        Account:this.state.Account,
        Name:this.state.Name,
        Amount:this.state.Amount
      };
      this.setState({QR:QRCodeData});
      setTimeout(() => {this.setState({generate: false})}, 2000)
    }
    handleBarCodeScanned = ({ type, data }) => {
        var str=data;
        if(str.substring(0,4)=="yape")
        {
            this.setState({Scanned:true,modalVisible:true});
            var j=JSON.parse(data.substring(4));
            this.setState({Name:j.Name});
            this.setState({Amount:j.Amount});
            this.setState({Account:j.Account});
        }
        else
        { 
            //TODO: Make an alert showing no correct QR Code
            Alert.alert("Worng QR Code","Please scan a Yape payment QR code",{text:'OK'})
            console.log("Not a correct QR code for payment");
        }
      }
      CancelScanner=()=>{
        this.setState({index:1})
      }
    ConfirmPayment = () => {
        if (this.state.PIN == '' || this.state.PIN.length != 4) {
            this.setState({ ValidPIN: false });
        }
        else {           
            this.setState({ modalVisible: false,Scanned:false });
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
    render(){
        return(
            <PrimaryHeader
            LeftText="Back"
            leftOnPress={() => this.props.navigation.navigate("Home")}
            leftIconName="ios-arrow-back"
            TitleText="QR Code"
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
                            <Icon name="money" size={30} color="#53acd3" />
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
                                        <TextList label="Account no." dataText={this.state.Account} />
                                        <TextList label="Name" dataText={this.state.Name}/> 
                                        <TextList label="Amount"  theme="green" dataText={this.state.Amount.toString() + ' SDG'} />                                                                                                             
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
            <Content contentContainerStyle={{flex:1, marginTop: 30, alignItems: 'center' }}>         
                 <SegmentControl
                        values={['Scan', 'Generate']}
                        selectedIndex={this.state.index}
                        height={40}
                        width={200}
                        onTabPress={this.SelectedPage}
                        borderRadius={5}
                        tabsContainerStyle={{
                            width:WIDTH-90
                        }}
                        tabStyle={{
                            marginVertical: 10,                        
                            borderColor: "#53acd3",
                        }}
                        tabTextStyle={{
                            color: "#a1a1a1"
                        }}
                        activeTabStyle={{
                            backgroundColor: '#53acd3'
                        }}
                    />
                    {this.state.index==0 ?
                        <View style={{
                            flex:1,
                            width:'100%'
                        }}>      
                        {!this.state.Scanned?        
                         <BarCodeScanner
                         onBarCodeScanned={this.handleBarCodeScanned}
                         style={{width:'100%',height:'100%'}}
                       >    
                        <View style={{
                          alignItems:'center',
                          marginTop:70,
                          position:'absolute',
                          top:0,
                          left:0,
                          right:0,
                          zIndex:2        
                        }}>
                          <Text style={{
                            color:'#fff',
                            fontSize:20
                          }}>Scan QR Code</Text>
                        </View>   
                       <View style={styles.layerTop} />
                        <View style={styles.layerCenter}>      
                          <View style={styles.layerLeft} />              
                          <View style={styles.focused}>
                          <View style={styles.LeftTopCorners} />
                          <View style={styles.RightTopCorners} />
                          <View style={styles.LeftBottomCorners} />
                          <View style={styles.RightBottomCorners} />  
                          </View>        
                          <View style={styles.layerRight} />                
                        </View>
                        <View style={styles.layerBottom} />       
                        <View style={{
                          alignItems:'center',        
                          position:'absolute',
                          bottom:50,
                          left:0,
                          right:0,
                          zIndex:2   
                        }}>
                         <TouchableOpacity onPress={this.CancelScanner}>
                            <Text style={{fontSize:24,color:"#fff"}}>Cancel</Text>
                          </TouchableOpacity>
                        </View>
                       </BarCodeScanner>   
                        : 
                        <View style={{
                          marginTop:100,        
                          alignItems:"center"       
                        }}>
                          <ActivityIndicator size="large"/>
                        </View>
                        }
                       
                      </View>
                         :
                        <View>                          
                          {/*<DefaultInput
                          IconName="money"
                          value={this.state.Amount}
                          includeRawValueInChangeText={true}
                          onChangeText={(x,raw)=>this.generateQRCode(raw)}
                          />
                          <Text style={{position:'absolute',top:17,left:20,fontSize:20}}>SDG</Text>
                          <DefaultInput
                          IconName="money"
                          value={this.state.Amount}
                          onChangeText={(amout)=>this.generateQRCode(amout)}
                          keyboardType="numeric"
                          />*/}
                          <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                            <AmountInput
                              value={this.state.Amount}
                              onChangeText={(Amount)=> this.setState({Amount})}
                            />
                            {/*<TextInput
                            style={{fontSize:50,color:'#53acd3',fontWeight:'bold'}}    
                            keyboardType='numeric'
                            placeholder="0.00" 
                            value={this.state.Amount} 
                            maxLength={6}                                               
                            underlineColorAndroid='transparent'
                            placeholderTextColor="rgba(83, 172, 211,0.6)"
                            onChangeText={(Amount)=> this.setState({Amount})}
                            />*/}
                            <RoundedButton onPress={this.generateQRCode} ButtonText="Generate"/>                            
                          </View>
                          <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',marginTop:10}}> 
                          {this.state.generate?<ActivityIndicator size="large"/> :null}                                                             
                        {this.state.QR!=null && this.state.Amount!=''?
                        <View style={{justifyContent:'center',display:this.state.generate?'none':'flex',alignItems:'center'}}>
                        <QRCode content={'yape'+JSON.stringify(QRCodeData)}/>
                        <VoidButton onPress={()=> this.setState({Amount:'',QR:null})} ButtonText="Clear"/>
                        </View>
                        :
                        null}
                        
                        </View>                        
                        </View>
                    }                   
            </Content>

            </PrimaryHeader>
        )
    }


}
export default QRCodeScreen;
const opacity = 'rgba(0, 0, 0, .6)';
const CorenerColor='#fff';
const space=0 ;
const styles = StyleSheet.create({
  container: {
    flex: 1,       
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  LeftTopCorners:{
    width:10,
    position:'absolute',
    zIndex:4,    
    height:10,    
    borderColor:CorenerColor,
    left:space,           
    borderLeftWidth:2,
    borderTopWidth:2, 
  },
  RightTopCorners:{
    width:10,
    position:'absolute',
    zIndex:4,    
    height:10,    
    borderColor:CorenerColor,
    right:space,           
    borderRightWidth:2,
    borderTopWidth:2, 
  },
  LeftBottomCorners:{
    width:10,
    position:'absolute',
    zIndex:4,    
    height:10,    
    borderColor:CorenerColor,
    left:space,  
    bottom:0,         
    borderLeftWidth:2,
    borderBottomWidth:2, 
  },
  RightBottomCorners:{
    width:10,
    position:'absolute',
    zIndex:4,    
    height:10,    
    borderColor:CorenerColor,
    right:space,     
    bottom:0,      
    borderRightWidth:2,
    borderBottomWidth:2, 
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 3.5,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    zIndex:1,
    backgroundColor: opacity
  },
  focused: {
    width:'90%',
    height:'100%',
    zIndex:4
  },
  layerRight: {
    flex: 1,
    zIndex:1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});
