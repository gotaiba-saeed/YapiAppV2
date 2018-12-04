import React from 'react';
import PropTypes from 'prop-types';
import {Text,View} from 'react-native';
import styles from './styles';

// const TextList=({label,dataText})=>(
//   <View style={styles.ListContainer}>
//       <Text style={styles.Label}>{label}:</Text>
//       <Text style={styles.DataText}>{dataText}</Text>
//   </View>  
// );
// TextList.propTypes={
//     dataText:PropTypes.string,
//     label:PropTypes.string,
// };

const getStyles =({theme})=>{
    const DataTextStyles=[styles.DataText];

    if(theme==='green')
    {
        DataTextStyles.push(styles.Green);
    }
    else
    {
        DataTextStyles.push(styles.Default);
    }

    return {DataTextStyles};
}

class TextList extends React.Component{
    static propTypes={
        label:PropTypes.string.isRequired,
        dataText:PropTypes.string,
        theme:PropTypes.oneOf(['default','green']),
    };
    static defaultProps={
        theme:'default',    
    }
    render(){
        const {label,dataText,theme}=this.props;
        const {DataTextStyles}=getStyles({theme});
        return(
        <View style={styles.ListContainer}>
            <Text style={styles.Label}>{label}:</Text>
            <Text style={DataTextStyles}>{dataText}</Text>
        </View>
        ) 
    }
}

export default TextList;