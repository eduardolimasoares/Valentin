import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Styles from "../styles/Styles";
import logoBorder from "../../assets/logoBorder.png";
import Button from "../components/Button";
import TextInputMask from 'react-native-text-input-mask';


export default class LoginScreen extends Component {
  state = {
    nome: "",
    cpf: "",
    email: "",
    confirmaEmail: "",
    telefone: "",
    endereco: ""
  };
  login = () => {
    this.props.navigation.navigate("profile");
  };
  render() {
    return (
      <LinearGradient
        colors={["#2AAFB0", "#5C2AD1"]}
        style={Styles.linearGradient}
      >
      <ScrollView>

        <View style={Styles.cadastroContainer}>
          <Image source={logoBorder} style={Styles.cadastroLogo} />
          <TextInput
            placeholder="Digite seu Nome"
            placeholderTextColor="#FFF"
            style={Styles.InputCadastro}
            // autoFocus={true}
            keyboardType="default"
            value={this.state.nome}
            onChangeText={nome => this.setState({ nome })}
          />

          <TextInputMask
            placeholder="Digite seu CPF"
            placeholderTextColor="#FFF"
            style={Styles.InputCadastro}
            autoFocus={true}
            keyboardType="numeric"
            value={this.state.cpf}
            onChangeText={cpf =>
              this.setState({ cpf: cpf.replace(/\.|\-/g, '') })
            }
            mask={'[000].[000].[000]-[00]'}
          />

          <TextInput
            placeholder="Digite seu e-mail"
            placeholderTextColor="#FFF"
            style={Styles.InputCadastro}
            // autoFocus={true}
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />

          <TextInput
            placeholder="Confirme seu e-mail"
            placeholderTextColor="#FFF"
            style={Styles.InputCadastro}
            // autoFocus={true}
            keyboardType="email-address"
            value={this.state.confirmaEmail}
            onChangeText={confirmaEmail => this.setState({ confirmaEmail })}
          />

          <TextInputMask
            placeholder="Digite seu telefone"
            placeholderTextColor="#FFF"
            style={Styles.InputCadastro}
            autoFocus={true}
            keyboardType="numeric"
            value={this.state.telefone}
            onChangeText={telefone =>
              this.setState({ telefone: telefone.replace(/\.|\-/g, '') })
            }
            mask={'([00])-[0]-[0000]-[0000]'}
          />

          <TextInput
            placeholder="Digite seu endereço"
            placeholderTextColor="#FFF"
            style={Styles.InputCadastro}
            // autoFocus={true}
            keyboardType="default"
            value={this.state.endereco}
            onChangeText={endereco => this.setState({ endereco })}
          />

          <TouchableHighlight
            style={Styles.buttonTouch}
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('MensageScreen')}
          >
            <Text style={Styles.button}>Solicitar cartão</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={Styles.buttonTouch}
            underlayColor="#fff"
            onPress={() => this.props.navigation.navigate('FirstScreen')}
          >
            <Text style={Styles.button}>Voltar</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      </LinearGradient>
    );
  }
}
