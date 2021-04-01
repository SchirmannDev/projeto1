import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class PrimeiroProjeto extends Component {
  somar(n1, n2) {
    return n1 + n2;
  }

  render() {
    let nome = "Cintia";

    return (
      <View>
        <Text style={styles.texto}>A soma de 2 + 2 é {this.somar(2, 2)}</Text>
        <Button
          title="Aperte"
          onPress={() => {
            alert("Me apertou!");
          }}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
  },
});
