import React, { Component } from "react";
import { View, Text, Button, Alert, TextInput, StyleSheet } from "react-native";

export default class Projeto1 extends Component {
  constructor(props) {
    super(props);
    this.state = { inputTexto: "", texto: "" };

    this.apertouBotão = this.apertouBotão.bind(this);
  }

  apertouBotão() {
    let s = this.state;

    if (s.inputTexto == "Cintia") {
      s.texto = "Vocẽ acertou";
    } else {
      s.texto = "Você errou";
    }

    this.setState(s);
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <TextInput
          style={styles.input}
          placeholder="Adivinhe meu nome..."
          onChangeText={(inputTexto) => this.setState({ inputTexto })}
        />

        <Button title="Aperte em mim" onPress={this.apertouBotão} />

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
    fontSize: 25,
    textAlign: "center",
    color: "#ff0000",
  },
});
