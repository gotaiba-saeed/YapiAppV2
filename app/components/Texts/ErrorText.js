import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles';

const ErrorText=({ErrText})=>(
    <Text style={styles.ErrorText}>{ErrText}</Text>
)
ErrorText.propTypes={
    ErrText:PropTypes.string
};

export default ErrorText;