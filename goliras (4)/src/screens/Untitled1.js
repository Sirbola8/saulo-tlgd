import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button4Stack}>
        <TouchableOpacity style={styles.button4}></TouchableOpacity>
        <Icon name="arrow-bold-right" style={styles.icon}></Icon>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled1")}
        style={styles.button}
      >
        <View style={styles.loremIpsumStack}>
          <Text style={styles.loremIpsum}></Text>
          <Text style={styles.confirmarEMail}>CONFIRMAR E-MAIL</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled1")}
        style={styles.button2}
      >
        <Text style={styles.eMail}>E-MAIL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.nDeCelular}>N° DE CELULAR</Text>
      </TouchableOpacity>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/o0729059414778448990.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.esqueceuASenha}>ESQUECEU A SENHA?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button4: {
    top: 8,
    width: 134,
    height: 60,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    left: 0
  },
  icon: {
    top: 0,
    left: 31,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 70
  },
  button4Stack: {
    width: 134,
    height: 76,
    marginTop: 677,
    marginLeft: 114
  },
  button: {
    width: 260,
    height: 60,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: -138,
    alignSelf: "center"
  },
  loremIpsum: {
    top: 12,
    left: 88,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  confirmarEMail: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 21
  },
  loremIpsumStack: {
    width: 191,
    height: 25,
    marginTop: 16,
    marginLeft: 35
  },
  button2: {
    width: 260,
    height: 60,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: -146,
    marginLeft: 48
  },
  eMail: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 14,
    marginLeft: 89
  },
  button3: {
    width: 260,
    height: 60,
    backgroundColor: "rgba(121,70,119,1)",
    marginTop: -146,
    alignSelf: "center"
  },
  nDeCelular: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 19,
    marginTop: 21,
    marginLeft: 64
  },
  image: {
    top: 0,
    left: 0,
    width: 281,
    height: 262,
    position: "absolute"
  },
  esqueceuASenha: {
    top: 239,
    left: 21,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 27
  },
  imageStack: {
    width: 285,
    height: 271,
    marginTop: -462,
    marginLeft: 27
  }
});

export default Untitled1;
