import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles';

const NumberText=({NumText})=>(
    <Text style={styles.NumberText}>+249 {NumText}</Text>
)
NumberText.propTypes={
    NumText:PropTypes.string
};

export default NumberText;