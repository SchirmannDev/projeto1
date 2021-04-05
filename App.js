import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Projeto1 extends Component {
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Text style={styles.azulGrande}>Hello World</Text>
        <Text>Olá Mundo</Text>
        <Text>React</Text>
        <Text>React-native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  azulGrande: {
    color: "#0000ff",
    fontSize: 30,
    textAlign: "center",
  },
});
