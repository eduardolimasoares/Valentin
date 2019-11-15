import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Styles from '../styles/Styles';
import splashScreenLogo from '../../assets/splashScreenLogo.png';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { StackActions, NavigationActions } from 'react-navigation';

export default class SplashScreen extends Component {
  _logOut = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'SplashRouter' })],
    });
    this.props.navigation.dispatch(resetAction);
  };
  componentDidMount = () => {
    setTimeout(() => {
      AsyncStorage.getItem('cpf').then(value => {
        this.setState({ cpf: '' });
      });
    }, 100);
    setTimeout(() => {
      AsyncStorage.getItem('signedIn').then(value => {
        this.setState({ signedIn: false });
      });
    }, 100);
    setTimeout(() => {
      this._logOut
    }, 100);
  };
  render() {
    return (
      <LinearGradient
        colors={['#2AAFB0', '#5C2AD1']}
        style={Styles.linearGradient}
      >
        <View style={Styles.LogOutContainer}>
          {/* <Image source={logoBorder} style={Styles.cadastroLogo} /> */}

          <Text style={Styles.mensageTitleLogOut}>Saindo</Text>
        </View>
      </LinearGradient>
    );
  }
}
