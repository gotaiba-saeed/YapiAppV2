import React from 'react';
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './styles';

const getStyles =({
    theme,
    size,
    outline,
    rounded,
    widthSize,
    disabled
    })=>{
    const containerStyles=[styles.containerDefault];
    const textStyles=[styles.textDefault];

    if(theme==='primary')
    {
        containerStyles.push(styles.containerPrimary);
        textStyles.push(styles.textPrimary)
    }
    if(outline)
    {
        containerStyles.push(styles.containerPrimaryOutline)
        textStyles.push(styles.textPrimaryOutline)
    }
    if(rounded)
    {
        containerStyles.push(styles.containerRounded);
    }
    if(size==='block')
    {
        containerStyles.push(styles.containerBlock);
    }
    if(size==='half')
    {
        containerStyles.push(styles.containerHalf)
    }
    if(widthSize)
    {
        containerStyles.push({width:widthSize})
    }

    return {containerStyles,textStyles};
}

class Buttons extends React.Component{
    static propTypes={
        text:PropTypes.string.isRequired,
        disabled:PropTypes.bool,
        outline:PropTypes.bool,
        rounded:PropTypes.bool,
        children:PropTypes.any,
        hasIcon:PropTypes.bool,
        leftIcon:PropTypes.bool,
        IconName:PropTypes.string,
        widthSize:PropTypes.string,
        size:PropTypes.oneOf(['normal','block','half']),
        onPress:PropTypes.func.isRequired,
        theme:PropTypes.oneOf(['default','primary','secondary']),
    };
    static defaultProps={
        theme:'default',
        size:'normal',
        outline:false,
        hasIcon:false,
        rounded:false,
        leftIcon:true,
        disabled:false    
    }
    render(){
        const {text,children,onPress,disabled,...rest}=this.props;
        const {textStyles,containerStyles}=getStyles({disabled,...rest});
        if(this.props.hasIcon)
        {
            if(this.props.leftIcon)
            {
            return(         
                <TouchableOpacity style={containerStyles} onPress={onPress} disabled={disabled}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Icon name={IconName} size={20}/>
                        <Text style={textStyles}>{text}</Text> 
                    </View>   
                </TouchableOpacity>      
                )   
            }
            else
            {
                return(         
                    <TouchableOpacity style={containerStyles} onPress={onPress} disabled={disabled}>                    
                        <Text style={textStyles}>{text}</Text>
                        {children}    
                    </TouchableOpacity>      
                    )   
            }          
        }
        else
        {
            return(         
            <TouchableOpacity style={containerStyles} onPress={onPress} disabled={disabled}>
                <Text style={textStyles}>{text}</Text>    
            </TouchableOpacity>      
            ) 
        }
    }
}

export default Buttons;