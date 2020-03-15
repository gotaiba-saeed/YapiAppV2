import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    ErrorText:{
        color:'$Red',
        fontSize: 13,
        letterSpacing:-1
    },
    NumberText:{
        fontWeight: 'bold',
        fontSize:20,
        marginVertical: 15,    
        color:'rgba(83, 172, 211,0.7)',
    },
    TitleText: {
        alignSelf: 'flex-start',
        marginLeft: 10,   
        marginBottom:10,
        color: '$TitleBlue',
        letterSpacing: 1,
        fontWeight: '600'
    },
    TitleTextCenter:{
        color: '$TitleBlue',
        letterSpacing: 1,
        fontWeight: '600'
    },
    ListContainer:{
        flexDirection:'row',    
        paddingVertical:10      
    },
    Label:{
        fontSize:16,
        fontWeight:'bold',
        paddingRight:5,
        color:'$PrimaryBlue'
    },
    DataText:{
        fontSize:14,
        fontWeight:'600',
        letterSpacing:1,   
        marginTop:2        
    },
    Default:{
        color:'$Gray'
    },
    Green:{
        color:"$LightGreen",  
    }
})