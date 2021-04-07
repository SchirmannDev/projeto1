import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";

export default class Projeto1 extends Component {
  constructor(props) {
    super(props);
    this.state = { texto1: "alguma coisa", texto2: "mmimimim" };

    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(texto) {
    let novoTexto = texto.toLowerCase();

    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, "i");

    return novoTexto;
  }

  escrever(t) {
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);

    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Memes</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu meme"
            onChangeText={this.escrever}
          />
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>
            {this.state.texto1.toUpperCase()}
          </Text>

          <Image style={styles.guri} source={require("./images/mimimi.jpg")} />

          <Text style={[styles.texto, styles.texto2]}>
            {this.state.texto2.toUpperCase()}
          </Text>
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
    margin: 10,
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
  area: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  guri: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0,
    borderRadius: 95,
  },
  texto: {
    fontSize: 25,
    color: "#ffffff",
    padding: 10,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center",
    height: 70,
  },
  texto1: {
    zIndex: 1,
  },
  texto2: {
    zIndex: 1,
    marginTop: -70,
  },
});
