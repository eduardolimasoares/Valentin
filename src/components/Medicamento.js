import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
const { height, width } = Dimensions.get('window');

export default props => {
  return (
    <TouchableHighlight
      style={{ borderRadius: 8, marginTop: 15 }}
      onLongPress={() => props.onDelete(props.id)}
    >
      <View style={itemEstilo}>
        <View>
          <Text style={[{ fontSize: 20 }, { color: '#6243d1' }]}>
            {props.remedio}
          </Text>
          <Text style={[{ fontSize: 15 }, { color: '#6243d1' }]}>
            Inicio:{' '}
            {moment(props.inicio)
              .locale('pt-br')
              .format('L [as] LT')}
          </Text>
        </View>
        <Text style={[{ fontSize: 25 }, { color: '#6243d1' }]}>
          {props.horas}h
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const itemEstilo = {
  width: width * 0.9,
  // marginTop: 15,
  padding: 15,
  height: height * 0.11,
  backgroundColor: '#fff',
  //   borderWidth: 0.5,
  //   BorderColor: "#222",
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 8,
};

const styles = StyleSheet.create({
  exclude: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  excludeText: {
    color: '#FFF',
    fontSize: 20,
    margin: 10,
  },
});
