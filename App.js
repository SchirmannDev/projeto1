import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class Projeto1 extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#00ff",
    margin: 50,
    padding: 10,
  },
});
