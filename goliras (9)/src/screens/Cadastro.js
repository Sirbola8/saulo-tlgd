import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";

function Cadastro(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/R0e17c9c95fc0f259f60492edff1b3a5f.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.sejaBemVindo}>SEJA BEM VINDO</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Login")}
        style={styles.button5}
      ></TouchableOpacity>
      <MaterialUnderlineTextbox
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
      <MaterialUnderlineTextbox1
        style={styles.materialUnderlineTextbox1}
      ></MaterialUnderlineTextbox1>
      <MaterialUnderlineTextbox1
        style={styles.materialUnderlineTextbox3}
      ></MaterialUnderlineTextbox1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 159,
    height: 217,
    marginTop: 163,
    marginLeft: 102
  },
  sejaBemVindo: {
    fontFamily: "charmonman-regular",
    color: "rgba(208,2,27,1)",
    fontSize: 35,
    marginTop: -309,
    marginLeft: 20
  },
  button5: {
    width: 64,
    height: 54,
    backgroundColor: "rgba(131,26,128,1)",
    marginTop: 589,
    marginLeft: 151
  },
  materialUnderlineTextbox: {
    height: 43,
    marginTop: -336
  },
  materialUnderlineTextbox1: {
    height: 43,
    marginTop: 39
  },
  materialUnderlineTextbox3: {
    height: 43,
    marginTop: 41
  }
});

export default Cadastro;
