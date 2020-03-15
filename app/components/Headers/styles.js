import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Dimensions } from 'react-native'
const {width:WIDTH}=Dimensions.get('window')

export default EStyleSheet.create({
    Header:{     
        width:WIDTH,
        backgroundColor:'$PrimaryBlue'
    },
    whiten:{
        color:'$white', 
    },
    underline:{
        textDecorationLine:'underline' 
    },
    leftHandle:{
             
    },
    leftHandleIcon:{        
    },
    rightHandle:{        
    },
    Title:{      
    }
})