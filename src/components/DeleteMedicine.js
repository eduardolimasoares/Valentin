import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';

export default class DeleteMedicine extends Component {
  render() {
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
          <Text style={styles.header}>Deletar Alarme de Medicamento?</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onDelete(props.id)}>
              <Text style={styles.button}>Deletar</Text>
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
