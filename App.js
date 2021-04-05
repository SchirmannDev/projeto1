import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";

export default class Projeto1 extends Component {
  constructor(props) {
    super(props);
    this.state = { texto: "" };

    this.mudarTexto = this.mudarTexto.bind(this);
  }

  mudarTexto(t) {
    let s = this.state;
    s.texto = "Olá, " + t + ". Seja bem vinda";

    this.setState(s);
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <TextInput
          style={styles.input}
          placeholder="Qual seu nome?"
          onChangeText={this.mudarTexto}
        />
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
