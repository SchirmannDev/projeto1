import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Projeto1 extends Component {
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Text style={styles.azulGrande}>Hello World</Text>
        <Text style={styles.vermelho}>Olá Mundo</Text>
        <Text style={styles.amarelo}>React</Text>
        <Text style={styles.pink}>React-native</Text>
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
  vermelho: {
    color: "#ff0000",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  amarelo: {
    color: "#ff0",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  pink: {
    color: "#ff00ff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
