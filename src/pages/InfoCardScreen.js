import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/Styles';
import logoBorder from '../../assets/logoBorder.png';
import infoCard from '../../assets/infoCard.png';
import Header from '../components/Header';
import AsyncStorage from '@react-native-community/async-storage';

export default class InforCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      cpfCgc: '',
      user: {
        name: '',
        limiteCredito: '',
        saldoCredito: '',
        creditoUtilizado: ''
      },
    };
  }

  async recuperarItem() {
    try {
      const data = await AsyncStorage.getItem('cpf');
      const cpf = JSON.parse(data) || [];
      return cpf.toString();
    } catch (err) {
      return err.message;
    }
  }

  componentDidMount() {
    this.recuperarItem().then(cpf => {
      this.setState({ cpf: cpf, cpfCgc: cpf });
    });
  }

  retornaCpf = cpf => {
    const str = cpf;
    const a = str.substr(0, 3);
    const b = str.substr(3, 3);
    const c = str.substr(6, 3);
    const d = str.substr(9, 2);
    const total = `${a}.${b}.${c}-${d}`;
    return total;
  };

  render() {
    const cpf = this.state.cpf;
    const config = {
      method: 'get',
      url: 'http://srv01.vetorsolucoes.com.br:8183/api/clientes/' + cpf,
      headers: {
        Authorization:
          'SXBkOU5GSX1OwoFReUlKQn9OVj4+Tl94eUlwWsKBTWxJOVBLZzZiSkp+TVZnfU9xRXw='
      },
    };
    const response = axios(config)
      .then(response => {
        this.setState({
          cpfCgc: response.data.cpfCgc,
          user: {
            name: response.data.nome,
            limiteCredito: response.data.limiteCredito,
            saldoCredito: response.data.saldoCredito,
            creditoUtilizado: response.data.creditoUtilizado,
          },
        });
      })
      .catch(function(error) {
        this.setState.user.error = error;
      });
    return (
      <View style={Styles.infoCardContainer}>
        <Header />

        <View style={Styles.card}>
          <ImageBackground source={infoCard} style={Styles.insideCard}>
            <Text style={Styles.titleSaldo}>Saldo</Text>
            <Text style={Styles.titleValue}>
              R$ {this.state.user.saldoCredito}
            </Text>
          </ImageBackground>
        </View>
        <View style={Styles.personalData}>
          <Text style={Styles.titleInfo}>Nome:</Text>
          <Text style={Styles.titleInfoPersonal}>{this.state.user.name}</Text>
          <Text style={Styles.titleInfo}>CPF:</Text>
          <Text style={Styles.titleInfoPersonal}>
            {this.retornaCpf(this.state.cpf)}
            {/* {typeof(this.state.cpf)} */}
          </Text>
          <Text style={Styles.titleInfo}>Limite:</Text>
          <Text style={Styles.titleInfoPersonal}>
            R$ {this.state.user.limiteCredito}
          </Text>
        </View>
      </View>
    );
  }
}
