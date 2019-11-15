import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TouchableHighlight,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../styles/Styles';
import Header from '../components/Header';
import Medicamento from '../components/Medicamento';
import AddMedicine from '../components/AddMedicine';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remedios: [],
      showAddMedicine: false,
    };
  }

  componentDidMount = async () => {
    const data = await AsyncStorage.getItem('remedios');
    const remedios = JSON.parse(data) || [];
    this.setState({ remedios });
  };

  filterMedicine = () => {
    const remedios = [...this.state.remedios];
    this.setState(remedios);
  };
  addMedicine = async remedio => {
    const remedios = await [...this.state.remedios];
    await remedios.push({
      id: Math.random(),
      remedio: remedio.remedio,
      inicio: remedio.inicio,
      horas: remedio.horas,
    });
    await this.setState({ remedios });
    await AsyncStorage.setItem('remedios', JSON.stringify(this.state.remedios));
    await this.setState({ showAddMedicine: false });
  };

  deleteMedicine = async id => {
    const remedios = await this.state.remedios.filter(
      remedio => remedio.id !== id
    );
    await this.setState({ remedios });
    await AsyncStorage.setItem('remedios', JSON.stringify(this.state.remedios));
    Alert.alert(
      'Alarme de Medicamentos',
      'Você deletou o Medicamento',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  render() {
    return (
      <LinearGradient
        colors={['#2AAFB0', '#5C2AD1']}
        style={Styles.linearGradient}
      >
        <View style={Styles.mainScreenContainer}>
          <AddMedicine
            isVisible={this.state.showAddMedicine}
            onSave={this.addMedicine}
            onCancel={() => this.setState({ showAddMedicine: false })}
          />
          <Header />
          <TouchableHighlight
            onPress={() => {
              this.setState({ showAddMedicine: true });
            }}
            style={Styles.buttonMedicineTouch}
            underlayColor="#fff"
          >
            <Text style={Styles.buttonMedicine}>
              Adicionar Alarme de Medicamento
            </Text>
          </TouchableHighlight>
          <FlatList
            data={this.state.remedios}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
              <Medicamento {...item} onDelete={this.deleteMedicine} />
            )}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default MainScreen;
