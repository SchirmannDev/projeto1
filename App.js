import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Projeto1 extends Component {
  render() {
    return (
      <View style={{ marginTop: 20, flex: 1, backgroundColor: "yellow" }}>
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View>
        <View
          style={{ width: 100, height: 100, backgroundColor: "green" }}
        ></View>
        <View
          style={{ width: 200, height: 200, backgroundColor: "red" }}
        ></View>
      </View>
    );
  }
}
