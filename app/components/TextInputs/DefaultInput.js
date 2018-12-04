import React from 'react';
import PropTypes from 'prop-types';
import {TextInput,Text,View} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import styles from './styles';

const DefaultInput = (props) => {
    const {hasIcon=true,IconName,onChangeText}=props;
    return (
        <View>
            {hasIcon ? <Icon
                style={styles.inputIcon}
                name={IconName}
                size={20}
            /> : null}

            <TextInput
                style={styles.normalInput}
                underlineColorAndroid='transparent'
                onChangeText={onChangeText}
                ref={props.inputRef}
                {...props}           
                placeholderTextColor="#a1a1a1"
            />
        </View>
    )
};
DefaultInput.propTypes={
    hasIcon:PropTypes.bool,
    IconName:PropTypes.string,
    onChangeText:PropTypes.func,
}
export default DefaultInput;