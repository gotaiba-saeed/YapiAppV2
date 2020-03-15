import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Dimensions } from 'react-native'
import colors from '../../colors';
const {width:WIDTH}=Dimensions.get('window')

export default EStyleSheet.create({
    pickerStyle:{
        width:WIDTH-100,            
        borderBottomWidth:1,       
        marginVertical:10, 
    },
    pickerPHstyle:{
        fontSize:16,
        color:colors.SecondaryBlue
    },
    pickerTextStyle:{
        fontSize:18,
    }
});