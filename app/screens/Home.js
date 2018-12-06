import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { PrimaryHeader } from '../components/Headers';
import { BlockButton, RoundedButton, VoidButton } from '../components/Buttons';
import Icon from '@expo/vector-icons/FontAwesome';
import { Content } from 'native-base';

class Home extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (

            <Container>
                <PrimaryHeader
                    hasLeft={false}
                    TitleText="YAPI"
                    rightIconName="ios-log-out"
                />
                <Content>
                    <BlockButton ButtonText="Account Summary" onPress={()=>this.props.navigation.push("AccountSummary")} >
                        <Icon style={{ color: '#fff' }} name="id-card-o" size={25} />
                    </BlockButton>
                    <BlockButton ButtonText="Transfer Funds" onPress={()=>this.props.navigation.push("TransferFund")}>
                        <Icon style={{ color: '#fff' }} name="refresh" size={25} />
                    </BlockButton>
                </Content>

            </Container>
        );
    }
}
export default Home;