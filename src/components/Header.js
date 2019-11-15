import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logoHeader from '../../assets/logoHeader.png';
import menuHeader from '../../assets/menuHeader.png';
import Styles from '../styles/Styles';

export default class Header extends Component {
  render() {
    return (
      <View style={Styles.headerContainer}>
        <View style={Styles.headerRowContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={menuHeader} style={Styles.menuImage} />
          </TouchableOpacity>
          <Text style={Styles.headerTitle}>VALENTIN</Text>
          <Image source={logoHeader} style={Styles.logoImage} />
        </View>
      </View>
    );
  }
}
