import React, { Component } from "react";
import { View, Text, Button, Alert, TextInput, StyleSheet } from "react-native";

export default class Projeto1 extends Component {
  apertouBotão() {
    Alert.alert("Você clicou");
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <TextInput style={styles.input} placeholder="Qual seu nome" />
        <Button title="Aperte em mim" onPress={this.apertouBotão} />
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
});
