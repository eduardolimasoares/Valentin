import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/Styles';
import logoBorder from '../../assets/logoBorder.png';
import Button from '../components/Button';
import TextInputMask from 'react-native-text-input-mask';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      cpf: ''
    };
  }
  async recuperarItem() {
    try {
      const data = await AsyncStorage.getItem('cpf');
      const cpf = JSON.parse(data) || [];
      return cpf;
    } catch (err) {
      return err.message;
    }
  }

  componentDidMount() {
    this.recuperarItem().then(cpf => {
      this.setState({ cpf: cpf });
    });
  }

  login = async () => {
    const config = {
      headers: {
        Authorization:
          'SXBkOU5GSX1OwoFReUlKQn9OVj4+Tl94eUlwWsKBTWxJOVBLZzZiSkp+TVZnfU9xRXw='
      },
    };
    const response = await axios
      .get(
        'http://srv01.vetorsolucoes.com.br:8183/api/clientes/' + this.state.cpf,
        config
      )
      .then(response => {
        this.setState({
          cpfCgc: response.data.cpfCgc,
        });
      });
    const compara = () => {
      if (this.state.cpf == this.state.cpfCgc) {
        AsyncStorage.setItem('cpf', JSON.stringify(this.state.cpf));
        AsyncStorage.setItem('signedIn', true);
        this.props.navigation.navigate('InsideApp');
      } else {
        Alert.alert(
          'CPF não cadastrado!',
          'Não encontramos seu CPF em nosso banco de dados.',
          [
            { text: 'ok' },
          ]
        );
      }
    };
    await compara();
    // .then(AsyncStorage.setItem('cpfCgc', JSON.stringify(this.state.cpfCgc)));
    // .then(Alert.alert(this.state.user.cpf))
    // .catch(function(error) {
    // this.setState.user.error = error;
    // });
    // Alert.alert(cpf)
    // const cpfString = await JSON.stringify(cpf);
    // const cpfCgc = await JSON.stringify(response.data.cpfCgc);

    // await Alert.alert(cpfString + cpfCgc)
    // if (cpfString == cpfCgc) {
    //   Alert('Entra')
    // } else {
    //   Alert('Não')
    // }
    // this.props.onLogin({ ...this.state });
  };
  render() {
    return (
      <LinearGradient
        colors={['#2AAFB0', '#5C2AD1']}
        style={Styles.linearGradient}
      >
        <View style={Styles.loginContainer}>
          <Image source={logoBorder} style={Styles.loginLogo} />
          <TextInputMask
            placeholder="Entre com seu CPF"
            placeholderTextColor="#FFF"
            style={Styles.Input}
            autoFocus={true}
            keyboardType="numeric"
            value={this.state.cpf}
            onChangeText={cpf =>
              this.setState({ cpf: cpf.replace(/\.|\-/g, '') })
            }
            mask={'[000].[000].[000]-[00]'}
          />
          {/* <Text>{this.state.user.name}</Text> */}
          {/* <Text>{this.state.cpfCgc}</Text> */}
          {/* <Text>{this.state.cpf}</Text> */}
          {/* <Text>{toString(this.state.signedIn)}</Text> */}
          {/* <Text>{this.state.teste}</Text> */}
          <TouchableHighlight
            style={Styles.buttonTouch}
            underlayColor="#fff"
            onPress={() => this.login()}
          >
            <Text style={Styles.button}>Login</Text>
          </TouchableHighlight>
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
export default LoginScreen;
