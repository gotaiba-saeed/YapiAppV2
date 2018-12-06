import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Dimensions } from 'react-native'
const {width:WIDTH}=Dimensions.get('window')

export default EStyleSheet.create({

    whiten:{
        color:"$white"
    },
    PrimaryText:{
        color:"$PrimaryBlue"
    },
    Void:{
        borderWidth: 1,
        borderColor: '$PrimaryBlue',
        backgroundColor:'transparent',
    },
    Primary:{
        backgroundColor:'$SecondaryBlue'
    },
    containerDefault:{
        alignItems:'center',              
        paddingVertical: 10,
        paddingHorizontal:20,
        borderWidth:1,
        borderRadius:4,
        marginHorizontal: 20,
        marginVertical:15,    
        borderColor:'$PrimaryBlue'
    },
    textDefault:{
        fontSize:16,
        fontWeight:'500',
        color:"$PrimaryBlue"
    },
    containerBlock:{
        width:"90%"
    },
    containerHalf:{
        width:"50%"
    },
    containerRounded:{
        borderRadius:23
    },
    containerPrimary:{
        backgroundColor:'$PrimaryBlue',
        borderColor:'transparent'
    },
    textPrimary:{
        color:'$white'
    },
    containerPrimaryOutline:{
        backgroundColor:'transparent',    
        borderColor:'$PrimaryBlue',
        borderRadius:23
    },
    textPrimaryOutline:{
        color:'$PrimaryBlue'
    },
    fullButton:{
        backgroundColor:'$SecondaryBlue',
        flex:1,
        padding:12,
        borderRadius:6
    },
    VoidButton:{
        paddingHorizontal:10,    
        marginVertical: 10,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:50
    },
    roundedButton:{    
        width:WIDTH-120,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:50
    },
    buttonView:{
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
    },
    blockButton:{
        width:WIDTH-70,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    Text:{
        paddingHorizontal: 10,
        fontSize: 16,
    },
    fullButton:{
        width:WIDTH,
        marginTop: 20,
    },
    NormalButton:{
        paddingHorizontal: 12,
    }
});