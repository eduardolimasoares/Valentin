import React, { Component } from 'react';
import {
  createDrawerNavigator,
  createSwitchNavigator,
  DrawerItems,
  SafeAreaView,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import { View, Text, Image } from 'react-native';
import Styles from './styles/Styles';
import SplashScreen from './pages/SplashScreen';
import FirstScreen from './pages/FirstScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import InforCardScreen from './pages/InfoCardScreen';
import MainScreen from './pages/MainScreen';
import MensageScreen from './pages/MensageScreen';
import LogOut from './pages/LogOut';
import logoDrawer from '../assets/logoBorder.png';

console.disableYellowBox = true;

_logOut = () => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'SplashRouter' })],
  });
  this.props.navigation.dispatch(resetAction);
};

export const SplashRouter = (signedIn = false) => {
  return createSwitchNavigator(
    {
      Splash: SplashScreen,
      FirstScreen: {
        screen: FirstScreen,
      },
      LoginScreen: {
        screen: LoginScreen,
      },
      RegisterScreen: {
        screen: RegisterScreen,
      },
      MensageScreen: {
        screen: MensageScreen,
      },
      InsideApp: InsideApp,
    },
    { initialRouteName: signedIn ? 'InsideApp' : 'Splash' }
  );
};

const InsideApp = createDrawerNavigator(
  {
    MainScreen: {
      screen: () => <MainScreen />,
      navigationOptions: ({ navigation }) => ({
        title: 'Medicamentos'
      }),
    },
    InforCardScreen: {
      screen: () => <InforCardScreen />,
      navigationOptions: ({ navigation }) => ({
        title: 'Meu Cartão'
      }),
    },
    logOutPage: () => this._logOut(),
  },
  {
    drawerWidth: 250,
    contentComponent: props => <CustomDrawerHeader {...props} />,
  }
);

const InitialScreen = createSwitchNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    RegisterScreen: {
      screen: RegisterScreen,
    },
    MensageScreen: {
      screen: MensageScreen,
    },
    InsideApp: {
      screen: InsideApp,
    },
  },
  { initialRouteName: 'FirstScreen' }
);

const CustomDrawerHeader = props => (
  <SafeAreaView
    style={{ flex: 1, flexDirection: 'column', marginTop: 20 }}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <View style={{ alignSelf: 'center' }}>
      <Image source={logoDrawer} style={Styles.logoDrawer} />
    </View>

    <DrawerItems {...props} />
  </SafeAreaView>
);

// export default SplashRouter;
