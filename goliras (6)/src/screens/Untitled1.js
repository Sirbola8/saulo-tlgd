import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button4Stack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.button4}
        ></TouchableOpacity>
        <Icon name="arrow-bold-right" style={styles.icon}></Icon>
      </View>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/o0729059414778448990.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.esqueceuASenha}>ESQUECEU A SENHA?</Text>
      </View>
      <MaterialRightIconTextbox
        inputStyle="Label"
        inputStyle="N° do celular"
        style={styles.materialRightIconTextbox}
      ></MaterialRightIconTextbox>
      <MaterialRightIconTextbox
        inputStyle="Label"
        inputStyle="e-mail"
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox>
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
    marginTop: -712,
    marginLeft: 27
  },
  materialRightIconTextbox: {
    height: 43,
    width: 281,
    marginTop: 125,
    marginLeft: 40
  },
  materialRightIconTextbox1: {
    height: 43,
    width: 281,
    marginTop: 37,
    marginLeft: 40
  }
});

export default Untitled1;
