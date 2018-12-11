import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Dimensions } from 'react-native';
import styles from './styles';
import Icon from '@expo/vector-icons/FontAwesome';
const { width: WIDTH } = Dimensions.get('window')
const getStyles = ({
    theme,
    outline,
    rounded,
    hasIcon,
    widthSize,
    disabled
}) => {
    const containerStyles = [styles.containerDefault];

    if (theme === 'PIN') {
        containerStyles.push(styles.containerPIN);
    }
    if (outline) {
        containerStyles.push(styles.containerOutline);    
    }
    if (rounded) {
        containerStyles.push(styles.containerRounded);
    }
    if(hasIcon)
    {
        containerStyles.push(styles.containerWithIcon);
        console.log("Icon")
    }
    if (widthSize) {
        containerStyles.push({ width: widthSize })
    }
    console.log(hasIcon)
    return { containerStyles };
}

class Textbox extends React.Component {
    static propTypes = {
        disabled: PropTypes.bool,
        outline: PropTypes.bool,
        rounded: PropTypes.bool,
        hasIcon: PropTypes.bool,
        IconName: PropTypes.string,
        widthSize: PropTypes.number,
        onChangeText: PropTypes.func.isRequired,
        theme: PropTypes.oneOf(['default', 'PIN']),
    };
    static defaultProps = {
        theme: 'default',
        outline: false,
        hasIcon: false,
        rounded: false,
        widthSize:WIDTH-100,      
        disabled: false
    }
    render() {
        const { IconName,hasIcon, onChangeText, disabled, ...rest } = this.props;
        const { containerStyles } = getStyles({ hasIcon,disabled, ...rest });
        return (
            <View>
                {hasIcon ? <Icon
                    style={styles.inputIcon}
                    name={IconName}
                    size={20}
                /> : null}

                <TextInput
                    style={containerStyles}
                    underlineColorAndroid='transparent'
                    onChangeText={onChangeText}
                    ref={this.props.inputRef}
                    {...this.props}
                    placeholderTextColor="#a1a1a1"
                />
            </View>
        )
    }
}

export default Textbox;