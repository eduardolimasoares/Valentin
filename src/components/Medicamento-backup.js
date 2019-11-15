import React, { Component } from "react";
import { View, ScrollView, FlatList, Text, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import Styles from "../styles/Styles";


const remedios = [
  { id: Math.random(), remedio: "Paracetamol", inicio: "08:00", horas: 8 },
  { id: Math.random(), remedio: "Propofol", inicio: "09:30", horas: 6 },
  { id: Math.random(), remedio: "Aspirina", inicio: "23:30", horas: 12 }
];

const itemEstilo = {
  width: width * 0.9,
  marginTop: 15,
  padding: 15,
  height: height * 0.11,
  backgroundColor: "#fff",
  //   borderWidth: 0.5,
  //   BorderColor: "#222",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 8
};

export const Remedio = props => (
  <View style={itemEstilo}>
    <View> 
      <Text style={[{ fontSize: 30 }, { color: "#6243d1" }]}>
        {props.remedio}
      </Text>
      <Text style={[{ fontSize: 19 }, { color: "#6243d1" }]}>
        Inicio: {props.inicio}
      </Text>
    </View>
    <Text style={[{ fontSize: 40 }, { color: "#6243d1" }]}>{props.horas}h</Text>
  </View>
);

export default props => {
  const renderItem = ({ item }) => {
    return <Remedio {...item} />;
  };
  return (
    <ScrollView>
      <FlatList
        data={remedios}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
