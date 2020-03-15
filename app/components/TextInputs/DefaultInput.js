import React from 'react';
import PropTypes from 'prop-types';
import {TextInput,Text,View} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import styles from './styles';
import colors from '../../colors';
import { TextInputMask } from 'react-native-masked-text'
import Color from 'color';

const DefaultInput = (props) => {
    const {hasIcon=true,IconName,onChangeText}=props;
    return (
        <View>
            {hasIcon ? <Icon
                style={styles.inputIcon}
                name={IconName}
                size={20}
            /> : null}
            {/*IconName==='money' ? 
            <TextInputMask
            type={'money'}
            style={styles.normalInput}
            options={{
              precision: 2,
              separator: '.',
              delimiter: ',',
              unit: 'SDG ',
              suffixUnit: ''
            }}
            {...props}
            onChangeText={onChangeText}
          />
            :
            <TextInput
                style={styles.normalInput}
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                ref={props.inputRef}            
                {...props}           
                placeholderTextColor="#a1a1a1"
        />*/}
        <TextInput
                style={styles.normalInput}
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                ref={props.inputRef}            
                {...props}           
                placeholderTextColor={colors.SecondaryBlue}/>
        </View>
    )
};
DefaultInput.propTypes={
    hasIcon:PropTypes.bool,
    IconName:PropTypes.string,
    onChangeText:PropTypes.func,
}
export default DefaultInput;