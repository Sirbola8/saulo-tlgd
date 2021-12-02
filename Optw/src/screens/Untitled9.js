import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialFixedLabelTextbox2 from "../components/MaterialFixedLabelTextbox2";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialFixedLabelTextbox4 from "../components/MaterialFixedLabelTextbox4";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled9(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/solicitud.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.cadastroStack}>
        <Text style={styles.cadastro}>CADASTRO</Text>
        <MaterialFixedLabelTextbox2
          style={styles.materialFixedLabelTextbox2}
        ></MaterialFixedLabelTextbox2>
      </View>
      <MaterialFixedLabelTextbox3
        style={styles.materialFixedLabelTextbox3}
      ></MaterialFixedLabelTextbox3>
      <MaterialFixedLabelTextbox4
        style={styles.materialFixedLabelTextbox4}
      ></MaterialFixedLabelTextbox4>
      <TouchableOpacity style={styles.button}>
        <Icon name="hand-okay" style={styles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 52,
    marginLeft: 89
  },
  cadastro: {
    top: 0,
    left: 55,
    position: "absolute",
    fontFamily: "roboto-italic",
    color: "#121212",
    height: 126,
    width: 313,
    textAlign: "center",
    fontSize: 35
  },
  materialFixedLabelTextbox2: {
    height: 43,
    width: 400,
    position: "absolute",
    left: 0,
    top: 106
  },
  cadastroStack: {
    width: 400,
    height: 149,
    marginTop: 27,
    marginLeft: -26
  },
  materialFixedLabelTextbox3: {
    height: 43,
    width: 375,
    marginTop: 12,
    marginLeft: 1
  },
  materialFixedLabelTextbox4: {
    height: 43,
    width: 375,
    marginTop: 19
  },
  button: {
    width: 150,
    height: 164,
    marginTop: 38,
    marginLeft: 108
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 150
  }
});

export default Untitled9;
