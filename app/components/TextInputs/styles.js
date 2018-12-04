import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Dimensions } from 'react-native'
const {width:WIDTH}=Dimensions.get('window')

export default EStyleSheet.create({
    inputIcon:{
        position:'absolute',
        top:15,
        color:'$SecondaryBlue'
    },
    normalInput:{
        borderBottomWidth: 2,
        borderBottomColor: '$SecondaryBlue',
        color:'$black',
        width:WIDTH-100,
        height:35,
        marginVertical: 10,    
        paddingLeft: 45,
    },
    Codeinput:{
        borderWidth:1,
        borderColor:"$PrimaryBlue",       
        width:WIDTH-130,
        height:55,
        textAlign:"center",
        marginVertical: 10,
    },
    CountryCode:{
        position:'absolute',
        top:15,
        color:'$SecondaryBlue',
        fontSize:14,
        fontWeight:'bold',
        letterSpacing:-2
    },
    phoneContainer:{
          
    },
    largText:{
        fontSize:34
    }
})