import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Styles from "../styles/Styles";

export default props => {
  return (
    <TouchableHighlight
      onPress={() => {
        props.onClick;
      }}
      style={Styles.buttonMedicineTouch}
      underlayColor="#fff"
    >
      <Text style={Styles.buttonMedicine}>{props.label}</Text>
    </TouchableHighlight>
  );
};
