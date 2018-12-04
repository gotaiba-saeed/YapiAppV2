import React from 'react';
import PropTypes from 'prop-types';
import {View,StatusBar} from 'react-native';
import styles from './styles';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

const PrimaryHeader=({
    hasLeft=true,
    hasRight=true,
    leftIconName,
    leftOnPress,
    rightOnPress,
    TitleText,
    LeftText,
    RightText,
    children,
    hasRightIcon=true,
    hasLeftIcon=true,
    rightIconName
})=>(  
    <Container>
        <Header style={styles.Header}>
            <StatusBar translucent={false} barStyle="light-content" />
            <Left>
                {hasLeft ?
                <Button transparent onPress={leftOnPress}>
                    {hasLeftIcon ?
                    <Icon style={styles.whiten} name={leftIconName} />
                    :null}
                    <Text style={[styles.underline, styles.whiten]}>{LeftText}</Text>
                </Button>
                : null }
                
            </Left>
            <Body>
                <Title style={styles.whiten}>{TitleText}</Title>
            </Body>
            <Right>
                {hasRight ?
                <Button transparent onPress={rightOnPress}>
                    {hasRightIcon ?  
                    <Icon style={styles.whiten} name={rightIconName} />
                    :null}
                    <Text style={[styles.underline, styles.whiten]}>{RightText}</Text>
                </Button> 
                : null}
                
            </Right>
        </Header>
        {children}
    </Container> 
);
PrimaryHeader.propTypes={
    children:PropTypes.any,
    hasLeft:PropTypes.bool,
    hasRight:PropTypes.bool,
    leftIconName:PropTypes.string,
    rightIconName:PropTypes.string,
    rightOnPress:PropTypes.func,
    leftOnPress:PropTypes.func,
    TitleText:PropTypes.string,
    LeftText:PropTypes.string,
    RightText:PropTypes.string,
    hasRightIcon:PropTypes.bool,
    hasLeftIcon:PropTypes.bool,
};

export default PrimaryHeader;