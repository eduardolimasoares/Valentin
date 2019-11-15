import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Styles from "../styles/Styles";
import logoBorder from "../../assets/logoBorder.png";
import Button from "../components/Button";
import TextInputMask from 'react-native-text-input-mask';


export default class MensageScreen extends Component {
  state = {
    nome: "Obrigado por se cadastrar! Em breve entraremos em contato",
  };

  render() {
    return (
      <LinearGradient
        colors={["#2AAFB0", "#5C2AD1"]}
        style={Styles.linearGradient}
      >
        <View style={Styles.firstScreenContainer}>
            <Image source={logoBorder} style={Styles.cadastroLogo} />
          
            <Text style={Styles.mensageTitleStyle}>{this.state.nome}</Text>
            <TouchableHighlight
            style={Styles.buttonTouch}
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('FirstScreen')}
          >
                <Text style={Styles.button}>Voltar</Text>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}
