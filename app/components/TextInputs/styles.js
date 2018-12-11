import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Dimensions } from 'react-native'
const {width:WIDTH}=Dimensions.get('window')

export default EStyleSheet.create({
    inputIcon:{
        position:'absolute',
        top:15,
        color:'$SecondaryBlue'
    },
    containerDefault:{
        borderBottomWidth: 2,
        borderBottomColor: '$SecondaryBlue',
        color:'$black',    
        height:35,
        marginVertical: 10,  
        paddingLeft:20          
    },
    containerOutline:{
        borderWidth:1,    
        height:45,
        borderColor:"$PrimaryBlue",
    },
    containerRounded:{
        borderRadius:4,
    },
    containerPIN:{
        borderWidth:1,
        borderColor:"$PrimaryBlue",
        borderBottomWidth: 1,
        textAlign:"center",     
        paddingLeft:0    
    },
    containerWithIcon:{
        paddingLeft: 45,
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