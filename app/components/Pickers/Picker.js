import React from 'react';
import PropTypes from 'prop-types';
import {TextInput,Text,View} from 'react-native';
import { Picker,Icon } from "native-base";
import styles from './styles';
import colors from '../../colors';

const YapePicker = (props) => {
    const {onValueChange,Color,IconName,children}=props;
    return (                
            <Picker
            style={[styles.pickerStyle,{borderBottomColor:Color}]}
              iosIcon={<Icon style={{color:Color}}
               name={IconName} />} 
              mode='dialog'               
              placeholderStyle={styles.pickerPHstyle}
              placeholderIconColor={colors.PrimaryBlue}        
              textStyle={[styles.pickerTextStyle,{color:Color}]}
              onValueChange={onValueChange}
              {...props}
            >
                {children}
            </Picker>
    )
};
YapePicker.propTypes={   
    onValueChange:PropTypes.func,
    Color:PropTypes.string,
    IconName:PropTypes.string,
    children:PropTypes.any
}
export default YapePicker;