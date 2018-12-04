import React from 'react';
import PropTypes from 'prop-types';
import {H3} from 'native-base';
import styles from './styles';

const Title=({Text})=>(
    <H3 style={styles.TitleText}>
        {Text}
    </H3>
)
Title.propTypes={
    Text:PropTypes.string
};

export default Title;