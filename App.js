import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";

export default class Projeto1 extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Memes</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu meme" />
        </View>
        <View style={styles.area}>
          <Image style={styles.guri} source={require("./images/mimimi.jpg")} />
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
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#eeeeee",
    height: 40,
    margin: 20,
    padding: 10,
  },
  inputArea: {
    alignSelf: "stretch",
  },
  area: {},
});
