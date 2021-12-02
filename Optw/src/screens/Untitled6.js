import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import MaterialDisabledTextbox1 from "../components/MaterialDisabledTextbox1";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import Icon from "react-native-vector-icons/Entypo";

function Untitled6(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/games+play+videogame+icon-13201958067865338241.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.placeholderStack}>
        <TextInput
          placeholder="HYPERLINK"
          style={styles.placeholder}
        ></TextInput>
        <MaterialDisabledTextbox1
          style={styles.materialDisabledTextbox1}
        ></MaterialDisabledTextbox1>
        <MaterialRightIconTextbox
          style={styles.materialRightIconTextbox}
        ></MaterialRightIconTextbox>
      </View>
      <Icon name="arrow-long-left" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ad5d5d"
  },
  image: {
    width: 433,
    height: 304,
    marginTop: 289,
    marginLeft: -33
  },
  placeholder: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-italic",
    color: "rgba(212,190,192,1)",
    height: 280,
    width: 385,
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,1)"
  },
  materialDisabledTextbox1: {
    height: 43,
    width: 373,
    position: "absolute",
    left: 9,
    top: 170
  },
  materialRightIconTextbox: {
    height: 43,
    width: 375,
    position: "absolute",
    left: 10,
    top: 234
  },
  placeholderStack: {
    width: 385,
    height: 280,
    marginTop: -612,
    marginLeft: -7
  },
  icon: {
    color: "#ffffff",
    fontSize: 125,
    marginTop: 375,
    marginLeft: 126
  }
});

export default Untitled6;
