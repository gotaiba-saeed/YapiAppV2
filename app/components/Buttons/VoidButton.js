import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles';
import {Button} from 'native-base';

const VoidButton =({children,ButtonText,onPress})=>(
    <Button style={[styles.Void,styles.VoidButton]} onPress={onPress}>
        {children}
        <Text style={[styles.PrimaryText,styles.Text]}>{ButtonText}</Text>
    </Button>
);

VoidButton.propTypes={
    children:PropTypes.any,
    onPress:PropTypes.func,
    ButtonText:PropTypes.string,
};


export default VoidButton;