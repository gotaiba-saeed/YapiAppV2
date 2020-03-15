import React from 'react';
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,Dimensions,Image} from 'react-native';
import styles from './styles';
import Icon from '@expo/vector-icons/FontAwesome';
//const {width:WIDTH}=Dimensions.get('window')
const getStyles =({color})=>{
    const ButtonStyles=[styles.BillButton];

    if(color)
    {
        ButtonStyles.push({backgroundColor:color})
    }

    return {ButtonStyles};
}

class BillButton extends React.Component{
    static propTypes={
        text:PropTypes.string.isRequired,        
        onPress:PropTypes.func,
        hasImage:PropTypes.bool,
        ImageSource:PropTypes.any,
        color:PropTypes.string,
        IconName:PropTypes.string
    };
    static defaultProps={
        color:'#00c8f8',
        IconName:'question-circle-o',
        hasImage:true      
    }
    render(){
        const {text,ImageSource,hasImage,IconName,onPress,...rest}=this.props;
        const {ButtonStyles}=getStyles({...rest});  
        if(hasImage)
        {
            return(
                <TouchableOpacity style={ButtonStyles} onPress={onPress}>
                    <Image source={ImageSource} style={styles.BillImage}/>
                    <Text style={styles.BillButtonText}>{text}</Text>
                </TouchableOpacity>
            )
        }
        else
        {

        }
            return(         
                <TouchableOpacity style={ButtonStyles} onPress={onPress}>
                    <Icon name={IconName} size={40} style={styles.BillIcon}/>
                    <Text style={styles.BillButtonText}>{text}</Text>
                </TouchableOpacity>
            )     
    }
}

export default BillButton;