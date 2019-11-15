import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SplashRouter } from './Navigator';
// import Navigator from './Navigator';
import {createAppContainer} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';

import Styles from './styles/Styles';
import Header from './components/Header';
import FirstScreen from './pages/FirstScreen';
import SplashScreen from './pages/SplashScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import InforCardScreen from './pages/InfoCardScreen';
import MainScreen from './pages/MainScreen';
import MensageScreen from './pages/MensageScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: AsyncStorage.getItem('signedIn'),
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('signedIn').then(value => {
      this.setState({ signedIn: true });
    });
      AsyncStorage.getItem("user").then(result => {
        this.setState({ signedIn: false });
      });
  }
  render() {
    const Layout = SplashRouter(this.state.signedIn);
    return <Layout />;
  }
}
