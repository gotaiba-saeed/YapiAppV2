import React from 'react';
import PropTypes from 'prop-types';
import {H3} from 'native-base';
import styles from './styles';

const CenterTitle=({Text})=>(
    <H3 style={styles.TitleTextCenter}>
        {Text}
    </H3>
)
CenterTitle.propTypes={
    Text:PropTypes.string
};

export default CenterTitle;