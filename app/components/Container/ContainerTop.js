import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';

const ContainerTop=({children})=>(
    <View style={styles.ContainerTop}>
         {children}
    </View>
)
ContainerTop.propTypes={
    children:PropTypes.any
}
export default ContainerTop;