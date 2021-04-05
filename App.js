import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Projeto1 extends Component {
  render() {
    return (
      <View style={{ marginTop: 20, flex: 1, backgroundColor: "yellow" }}>
        <View style={{ flex: 1, backgroundColor: "blue" }}></View>
        <View style={{ flex: 1, backgroundColor: "green" }}></View>
        <View style={{ flex: 1, backgroundColor: "red" }}></View>
        <View style={{ flex: 2, backgroundColor: "gray" }}></View>
        <View style={{ flex: 1, backgroundColor: "pink" }}></View>
      </View>
    );
  }
}
