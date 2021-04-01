import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class PrimeiroProjeto extends Component {
  somar(n1, n2) {
    return n1 + n2;
  }

  render() {
    let nome = "Cintia";

    return (
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 25, color: "red", margin: 20 }}>
          Hello World
        </Text>
        <Image
          source={{
            uri:
              "https://saocarlosemrede.com.br/estrela-de-belem-podera-ser-vista-hoje-depois-de-397-anos/",
          }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  }
}
