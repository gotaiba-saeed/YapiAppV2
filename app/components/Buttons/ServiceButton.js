import React from 'react';
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity,Dimensions} from 'react-native';
import styles from './styles';
import Icon from '@expo/vector-icons/FontAwesome';
//const {width:WIDTH}=Dimensions.get('window')
const getStyles =({color})=>{
    const ButtonStyles=[styles.ServiceButton];

    if(color)
    {
        ButtonStyles.push({backgroundColor:color})
    }

    return {ButtonStyles};
}

class ServiceButton extends React.Component{
    static propTypes={
        text:PropTypes.string.isRequired,        
        onPress:PropTypes.func.isRequired,
        color:PropTypes.string,
        IconName:PropTypes.string
    };
    static defaultProps={
        color:'#00c8f8',
        IconName:'question-circle-o'      
    }
    render(){
        const {text,IconName,onPress,...rest}=this.props;
        const {ButtonStyles}=getStyles({...rest});  
            return(         
                <View style={styles.ServiceContainer}>
                    <TouchableOpacity onPress={onPress} style={ButtonStyles}>
                        <Icon name={IconName} color="#fff" size={30}/>
                    </TouchableOpacity>
                    <Text style={styles.ServiceText}>{text}</Text>
                </View>  
            )     
    }
}

export default ServiceButton;