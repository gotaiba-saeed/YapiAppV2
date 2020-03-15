import React from 'react';
import PropTypes from 'prop-types';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Button} from 'native-base';

const FullButton =({ButtonText})=>(
    <Button style={[styles.Primary,styles.fullButon]}>
        {children}
        <Text style={[styles.whiten,styles.Text]}>{ButtonText}</Text>
    </Button>
);


FullButton.propTypes={
    children:PropTypes.any,
    ButtonText:PropTypes.string
};

export default FullButton;