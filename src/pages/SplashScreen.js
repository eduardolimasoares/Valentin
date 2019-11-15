import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Styles from '../styles/Styles';
import splashScreenLogo from '../../assets/splashScreenLogo.png';

export default class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('FirstScreen');
    }, 3000);
  };
  render() {
    return (
      <View style={Styles.splashScreenContainer}>
        <Image source={splashScreenLogo} style={Styles.splashScreenLogo} />
      </View>
    );
  }
}
