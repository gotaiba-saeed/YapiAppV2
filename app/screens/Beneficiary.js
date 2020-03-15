import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  Text,
  ActivityIndicator,
  View,
  AsyncStorage
} from "react-native";
import { DefaultInput } from '../components/TextInputs';
import { Buttons } from "../components/Buttons";
import { PrimaryHeader } from "../components/Headers";
import { Content, H3,Picker,Icon } from "native-base";
import { AddUsers, root, Store } from "../config";
import colors from '../colors';
import YapePicker from '../components/Pickers/Picker';
const {width:WIDTH}=Dimensions.get('window')

var DATA = [
  {
    id: 1,
    name: "Electricity"
  },
  {
    id: 2,
    name: "Telecom"
  },
  {
    id: 3,
    name: "Education"
  },
  {
    id: 4,
    name: "Government Services"
  },
  {
    id: 5,
    name: "Account"
  },
  {
    id: 6,
    name: "Online Services"
  }
];    
var Biller=[
  {
    id:1,
    BillerName:'Zain',
    CatergoryId:2
  },
  {
    id:2,
    BillerName:'MTN',
    CatergoryId:2
  },
  {
    id:3,
    BillerName:'Sudani',
    CatergoryId:2,
  },
  {
    id:4,
    BillerName:'UMST',
    CatergoryId:3,
  },
  {
    id:5,
    BillerName:'Sudan University',
    CatergoryId:3
  },
  {
    id:6,
    BillerName:'Tirhal',
    CatergoryId:6
  },
  {
    id:7,
    BillerName:'Lemon',
    CatergoryId:6
  },
];

var SubBiller=[
  {
    id:1,
    SubName:'Post-Paid'
  },
  {
    id:2,
    SubName:'Pre-Paid'
  },
  {
    id:3,
    SubName:'Bachelor Student'
  },
]

class Beneficiary extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      PAN: "",
      PANview: "",
      ExpDate: "",
      PIN: "",
      ValidCard: true,
      ValidExp: true,
      ValidPIN: true,
      COLOR:colors.PrimaryBlue,
      CategorySelected:'',
      NickName:'',
      BillerSelected:'',
      SubBillerSelected:''
    };
  }
  CategorySelected(value,label) {
    console.log(value);
    var text=DATA.filter(item=> item.id===value); 
    this.setState({CategorySelected:value},()=>{
      this.state.CategorySelected ==''? this.setState({COLOR:'#53acd3'}) :this.setState({COLOR:'#00A572'})
      console.log(this.state.COLOR);
    });  
  }
  BillerSelected(value){
    this.setState({BillerSelected:value});
  }
  SubBillerSelected(value){
    this.setState({SubBillerSelected:value});
  }

  render() {
    
    return (
      <PrimaryHeader
        LeftText="Back"
        leftOnPress={() => this.props.navigation.navigate("Home")}
        leftIconName="ios-arrow-back"
        TitleText="Beneficiary"
        hasRight={false}
      >
        {/*<FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View>
            <Text>{item.Id}</Text>
            <Text>{item.Name}</Text>
          </View>
          }
          keyExtractor={item => item.Id}
        />*/}
        <Content
          contentContainerStyle={{ alignItems: "center", marginTop: 30 }}
        >
          <View>                
            <YapePicker
            onValueChange={value=>this.CategorySelected(value)}
            Color={this.state.CategorySelected==''?colors.PrimaryBlue:colors.LightGreen}
            placeholder="Select Category"
            selectedValue={this.state.CategorySelected}  
            IconName={this.state.CategorySelected==''? "arrow-down":'md-checkmark-circle'}
            >
              {DATA.map(item=> 
                <Picker.Item value={item.id} key={item.id} label={item.name} />  
              )}        
            </YapePicker>    
            <YapePicker
            onValueChange={value=>this.BillerSelected(value)}
            Color={this.state.BillerSelected==''?colors.PrimaryBlue:colors.LightGreen}
            placeholder="Select Biller"
            selectedValue={this.state.BillerSelected}  
            IconName={this.state.BillerSelected==''? "arrow-down":'md-checkmark-circle'}
            >
              {DATA.map(item=> 
                <Picker.Item value={item.id} key={item.id} label={item.name} />  
              )}        
            </YapePicker>    
            <YapePicker
            onValueChange={value=>this.SubBillerSelected(value)}
            Color={this.state.BillerSelected==''?colors.PrimaryBlue:colors.LightGreen}
            placeholder="Select Sub-Biller"
            selectedValue={this.state.SubBillerSelected}  
            IconName={this.state.SubBillerSelected==''? "arrow-down":'md-checkmark-circle'}
            >
              {DATA.map(item=> 
                <Picker.Item value={item.id} key={item.id} label={item.name} />  
              )}        
            </YapePicker>  
            <DefaultInput
              placeholder="Nick Name"
              IconName="id-card-o"
              onChangeText={(NickName) => this.setState({NickName})}
             />   
             <Buttons theme="primary" text="Add" onPress={()=>console.log()}></Buttons>                      
          </View>
        </Content>
      </PrimaryHeader>
    );
  }
}
export default Beneficiary;
