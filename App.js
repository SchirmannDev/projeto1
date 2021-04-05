import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class Janta extends Component {
  constructor(props) {
    super(props);
    this.state = { comida: "" };
    let comidas = ["Omelete", "Salada", "Banana", "Torta", "Arroz"];

    setInterval(() => {
      this.setState((previousState) => {
        let n = Math.floor(Math.random(n) * comidas.length);
      });

      return { comida: comidas[n] };
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            textAlign: "center",
            color: "red",
          }}
        >
          Hoje você vai jantar:
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "orange",
          }}
        >
          {this.state.comida}
        </Text>
      </View>
    );
  }
}

export default class Projeto1 extends Component {
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Janta />
      </View>
    );
  }
}
