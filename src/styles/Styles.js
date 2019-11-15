import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20: {
    fontSize: 45,
    color: '#995533'
  },
  headerContainer: {
    width: width,
    height: height * 0.13,
    marginTop: 0,
    paddingTop: width * 0.04,
    padding: 10,
    // borderBottomWidth: 1,
    // borderColor: "#bbb",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 0,
    // backgroundColor: "#FFC74A"
    backgroundColor: '#fff'
  },
  headerRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    margin: 10,
  },
  logoImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    margin: 10,
  },
  headerTitle: {
    fontSize: 25,
    color: '#21075A',
    fontFamily: 'SansBlack'
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
  //first screen **********************
  firstScreenContainer: {
    width: width,
    height: height,
    marginTop: 0,
    paddingTop: width * 0.2,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logoBorderFirstScreen: {
    height: height * 0.2,
    width: height * 0.2,
    resizeMode: 'contain',
    margin: 10,
  },
  //Button ****************************
  button: {
    fontSize: 20,
    color: '#fff',
    padding: 2,
    // marginTop: 45,
    // borderRadius: 50,
    // borderWidth: 1.5,
    // borderColor: "#fff",
    textAlign: 'center',
    width: width * 0.6,
  },
  buttonTouch: {
    // fontSize: 30,
    // color: "#000",
    padding: 5,
    marginTop: 50,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#fff'
    // textAlign: "center",
    // width: width * 0.8
  },
  //ButtonMedicine ****************************
  buttonMedicine: {
    fontSize: 18,
    // color: "#6243d1",
    color: '#fff',
    padding: 2,
    // marginTop: 45,
    // borderRadius: 50,
    // borderWidth: 1.5,
    // borderColor: "#fff",
    textAlign: 'center',
    width: width * 0.83,
  },
  buttonMedicineTouch: {
    // fontSize: 30,
    // color: "#000",
    marginTop: 15,
    padding: 15,
    backgroundColor: '#FFC74A',
    borderRadius: 8,
    // borderWidth: 1.5,
    // borderColor: "#fff"
    // textAlign: "center",
    // width: width * 0.8
  },
  //SplashScreen ****************************
  splashScreenLogo: {
    height: height * 0.3,
    width: height * 0.3,
    resizeMode: 'contain',
    marginTop: width * -0.1,
  },
  splashScreenContainer: {
    width: width,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff'
  }, //LoginScreen ***************
  loginContainer: {
    width: width,
    height: height,
    marginTop: 0,
    paddingTop: width * 0.2,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  loginLogo: {
    height: height * 0.2,
    width: height * 0.2,
    resizeMode: 'contain'
  },
  Input: {
    marginTop: 50,
    fontSize: 20,
    color: '#fff',
    borderBottomWidth: 1.5,
    borderColor: '#fff',
    width: width * 0.6,
    textAlign: 'center'
  }, //Cadastro Screen ***************
  cadastroContainer: {
    width: width,
    height: height,
    marginTop: 0,
    paddingTop: width * 0.09,
    // padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  InputCadastro: {
    marginTop: 25,
    fontSize: 20,
    color: '#fff',
    borderBottomWidth: 1.5,
    borderColor: '#fff',
    width: width * 0.6,
    textAlign: 'center'
  },
  cadastroLogo: {
    height: height * 0.1,
    width: height * 0.1,
    resizeMode: 'contain'
    // margin: 10
  }, //INFOCARD **************
  infoCardContainer: {
    width: width,
    height: height,
    marginTop: 0,
    // paddingTop: width * 0.09,
    // padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: "#2AAFB0"
    // backgroundColor: "#FFB700"
    backgroundColor: '#5C2AD1'
  },
  logoInfoCardScreen: {
    height: height * 0.1,
    width: height * 0.1,
    resizeMode: 'contain'
  },
  card: {
    marginTop: 20,
    width: width * 0.8,
    height: height * 0.26895,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  insideCard: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  titleSaldo: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'SansBlack',
    fontWeight: '700'
  },
  titleValue: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'SansBlack',
    fontWeight: '700',
    marginBottom: height * 0.04,
  },
  personalData: {
    marginTop: 20,
    width: width * 0.8,
    height: height * 0.26985,
    flexDirection: 'column',
    alignItems: 'flex-start'
    // justifyContent: "center"
    // backgroundColor: "#000"
  },
  titleInfo: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'SansBlack'
    // fontWeight: "700"
  },
  titleInfoPersonal: {
    marginBottom: 4,
    fontSize: 20,
    color: '#fff',
    fontFamily: 'SansBlack',
    fontWeight: '700'
  }, // MainScreen Container
  mainScreenContainer: {
    width: width,
    height: height,
    marginTop: 0,
    // paddingTop: width * 0.09,
    // padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mensageTitleStyle: {
    width: width * 0.9,
    marginTop: 15,
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'SansBlack',
    justifyContent: 'center'
  },
  mensageTitleLogOut: {
    width: width * 0.9,
    marginTop: 15,
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'SansBlack',
    justifyContent: 'center'
  },
  LogOutContainer: {
    width: width,
    height: height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoDrawer: {
    height: height * 0.1,
    width: height * 0.1,
    resizeMode: 'contain',
    margin: 10,
  },
});
