import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/Styles';
import logoBorder from '../../assets/logoBorder.png';

export default class FirstScreen extends Component {
  render() {
    return (
      <LinearGradient
        colors={['#2AAFB0', '#5C2AD1']}
        style={Styles.linearGradient}
      >
        <View style={Styles.container}>
          <Image source={logoBorder} style={Styles.logoBorderFirstScreen} />
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('LoginScreen');
            }}
            style={Styles.buttonTouch}
            underlayColor="#fff"
          >
            <Text style={Styles.button}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('RegisterScreen');
            }}
            style={Styles.buttonTouch}
            underlayColor="#fff"
          >
            <Text style={Styles.button}>Pedir Cartão</Text>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}
