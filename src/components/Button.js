import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Styles from "../styles/Styles";

export default props => {
  return (
    <TouchableHighlight

      style={Styles.buttonTouch}
      underlayColor="#fff"
    >
      <Text style={Styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
};
