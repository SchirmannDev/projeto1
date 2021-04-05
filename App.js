import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Imagem extends Component {
  render() {
    let imagem = {
      uri: "https://github.com/'+this.props.nome+'.png",
    };

    return <Image source={imagem} style={{ width: 300, height: 300 }} />;
  }
}

export default class Projeto1 extends Component {
  render() {
    let imagem = {
      uri: "https://github.com/schirmann.png",
    };

    return (
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 25, color: "red", margin: 50 }}>
          Hello World
        </Text>
        <Imagem nome="schirmann" />
        <Image
          source={imagem}
          style={{ width: 300, height: 300, borderRadius: 150 }}
        />
      </View>
    );
  }
}
