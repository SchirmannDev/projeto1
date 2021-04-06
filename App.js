import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Projeto1 extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Memes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#999999",
    paddingTop: 30,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "blue",
  },
});
