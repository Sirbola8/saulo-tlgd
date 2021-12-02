import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";

function Untitled8(props) {
  return (
    <View style={styles.container}>
      <MaterialFixedLabelTextbox1
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox1>
      <View style={styles.materialUnderlineTextbox2Stack}>
        <MaterialUnderlineTextbox2
          style={styles.materialUnderlineTextbox2}
        ></MaterialUnderlineTextbox2>
        <Text style={styles.descricao}>descrição:</Text>
      </View>
      <Text style={styles.loremIpsum}>suporte 🛠</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 375,
    marginTop: 191,
    marginLeft: -15
  },
  materialUnderlineTextbox2: {
    height: 516,
    width: 360,
    position: "absolute",
    left: 0,
    top: 24
  },
  descricao: {
    top: 0,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 27,
    width: 357
  },
  materialUnderlineTextbox2Stack: {
    width: 361,
    height: 540,
    marginTop: 18,
    marginLeft: 23
  },
  loremIpsum: {
    fontFamily: "roboto-italic",
    color: "#121212",
    height: 77,
    width: 364,
    fontSize: 45,
    textAlign: "center",
    marginTop: -725,
    marginLeft: 5
  }
});

export default Untitled8;
