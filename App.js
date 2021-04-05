import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class Projeto1 extends Component {
  constructor(props) {
    super(props);
    this.state = { texto: "" };
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <TextInput style={styles.input} placeholder="Qual seu nome?" />
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#00ff",
    margin: 10,
    padding: 10,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
  },
});
