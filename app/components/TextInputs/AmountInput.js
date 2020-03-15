import React from "react";
import PropTypes from "prop-types";
import {Text, View } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
import styles from "./styles";
import { TextInputMask } from 'react-native-masked-text'

const AmountInput = props => {
  const { onChangeText } = props;
  return (
    <View>
      <Text style={{ fontSize: 30, color: "#53acd3", fontWeight: "bold" }}>
        SDG
      </Text>
      <TextInputMask
        type={"money"}
        style={{ fontSize: 50, color: "#53acd3", fontWeight: "bold" }}
        options={{
          precision: 2,
          separator: ".",
          delimiter: ",",
          unit: "",
          suffixUnit: ""
        }}
        placeholder="0.00"    
        placeholderTextColor="rgba(83, 172, 211,0.6)"
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};
AmountInput.propTypes = {
  onChangeText: PropTypes.func
};
export default AmountInput;
