import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Picker,
  DatePickerAndroid,
  Plataform
} from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';

const initialState = {
  id: '',
  remedio: '',
  date: new Date(),
  horas: ''
};
export default class AddMedicine extends Component {
  state = { ...initialState };

  save = () => {
    if (!this.state.remedio.trim()) {
      Alert.alert('Dados Inválidos, Informe um nome para seu medicamento.');
      return;
    }
    const data = { ...this.state };
    this.props.onSave(data);
    this.setState({ ...initialState });
  };

    handleDateAndroidChanged = () => {
        DatePickerAndroid.open({
            date: this.state.inicio
        }).then(e => {
            if (e.action !== DatePickerAndroid.dismissedAction) {
                const momentDate = moment(this.state.inicio)
                momentDate.date(e.day)
                momentDate.month(e.month)
                momentDate.year(e.year)
                this.setState({ inicio: momentDate.toDate() })
            }
        })
    }
  

  render() {
        let datePicker = null
        if (Platform.OS === 'ios') {
            datePicker = <DatePickerIOS mode='date' date={this.state.inicio}
                onDateChange={date => this.setState({ inicio })} />
        } else {
            datePicker = (
            <TouchableOpacity onPress={this.handleDateAndroidChanged}>
              <Text style={{ height: 50, fontSize: 16, marginLeft: 10 }}>
                {moment(this.state.inicio).format('L [as] LT')}
              </Text>
            </TouchableOpacity>
            )
        }
    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.isVisible}
        animationType="slide"
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.offset} />
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>Inserir Medicamento</Text>
          <TextInput
            placeholder="Nome Medicamento"
            style={styles.input}
            onChangeText={remedio => this.setState({ remedio })}
            value={this.state.remedio}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 12,
              width: '90%'
            }}
          >
            <Text
              style={{
                height: 50,
                fontSize: 16,
                marginTop: 13
              }}
            >
              Intervalo:
            </Text>
            <Picker
              selectedValue={this.state.horas}
              style={{
                height: 50,
                fontSize: 16,
                width: '60%',
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ horas: itemValue })
              }
            >
              <Picker.Item label="A cada 1 horas" value="1" />
              <Picker.Item label="A cada 2 horas" value="2" />
              <Picker.Item label="A cada 3 horas" value="3" />
              <Picker.Item label="A cada 4 horas" value="4" />
              <Picker.Item label="A cada 6 horas" value="6" />
              <Picker.Item label="A cada 8 horas" value="8" />
              <Picker.Item label="A cada 12 horas" value="12" />
              <Picker.Item label="A cada 24 horas" value="24" />
              <Picker.Item label="A cada 48 horas" value="48" />
              <Picker.Item label="A cada 1 semana" value="168" />
              <Picker.Item label="A cada 15 dias" value="360" />
              <Picker.Item label="A cada 1 mês" value="720" />
            </Picker>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 10,
              marginLeft: 12,
              width: '90%'
            }}
          >
            <Text style={{ height: 50, fontSize: 16 }}>Inicio:</Text>
            {datePicker}
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.save}>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.offset} />
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  offset: {
    flex: 1,
    backgroundColor: 'rgba(54, 40, 156,0.7)'
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: '#000'
  },
  header: {
    backgroundColor: '#FFC74A',
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    fontSize: 15,
  },
  input: {
    width: '90%',
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 6,
  },
});
