import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles';
import {Button} from 'native-base';

const RoundedButton =({children,ButtonText,onPress})=>(
    <Button onPress={onPress} style={[styles.Primary,styles.roundedButton]}>
        {children}
        <Text style={[styles.whiten,styles.Text]}>{ButtonText}</Text>
    </Button>
);

RoundedButton.propTypes={
    children:PropTypes.any,
    onPress:PropTypes.func,
    ButtonText:PropTypes.string,
};


export default RoundedButton;