import React from 'react';
import PropTypes from 'prop-types';
import {TextInput,Text,View} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import styles from './styles';

const PhoneInput = (props) => {
    const {onChangeText}=props;
    return (
        <View style={styles.phoneContainer}>
            <Text style={styles.CountryCode}>+249</Text>           
            <TextInput
                style={styles.normalInput}
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                {...props}         
                placeholderTextColor="#a1a1a1"
            />
        </View>
    )
};
PhoneInput.propTypes={   
    onChangeText:PropTypes.func,
}
export default PhoneInput;