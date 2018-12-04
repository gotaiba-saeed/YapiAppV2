import React from 'react';
import PropTypes from 'prop-types';
import {TextInput,Text,View} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import styles from './styles';

const CodeInput = (props) => {
    const {onChangeText}=props;
    return (                
            <TextInput
                style={styles.Codeinput}
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                {...props}         
                placeholderTextColor="#a1a1a1"
            />
    )
};
CodeInput.propTypes={   
    onChangeText:PropTypes.func,
}
export default CodeInput;