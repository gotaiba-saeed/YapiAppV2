import React from 'react';
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Button} from 'native-base';

const BlockButton=({leftIcon=true,ButtonText,children,onPress})=>(
    <Button onPress={onPress} style={[styles.Primary,styles.blockButton]}>
        
        {children}
        <Text style={[styles.whiten,styles.Text]}>{ButtonText}</Text>
    </Button>
);

BlockButton.propTypes={
    children:PropTypes.any,
    onPress:PropTypes.func,
    ButtonText:PropTypes.string
};

export default BlockButton;