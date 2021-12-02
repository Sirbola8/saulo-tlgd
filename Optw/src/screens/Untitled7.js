import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";

function Untitled7(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button2StackStack}>
        <View style={styles.button2Stack}>
          <TouchableOpacity style={styles.button2}>
            <Image
              source={require("../assets/images/sticker,375x360.u5.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </TouchableOpacity>
          <Image
            source={require("../assets/images/061dde1c16977f7d2ae3a2c6976e6a99.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </View>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/images/INTZ_e-Sportslogo_square.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </TouchableOpacity>
      </View>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox}
      ></MaterialFixedLabelTextbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button2: {
    top: 0,
    left: 29,
    width: 288,
    height: 308,
    position: "absolute"
  },
  image: {
    width: 280,
    height: 361
  },
  image3: {
    top: 146,
    left: 0,
    width: 347,
    height: 455,
    position: "absolute"
  },
  button2Stack: {
    top: 0,
    left: 0,
    width: 347,
    height: 601,
    position: "absolute"
  },
  button: {
    top: 445,
    left: 39,
    width: 254,
    height: 200,
    position: "absolute"
  },
  image2: {
    width: 253,
    height: 235
  },
  button2StackStack: {
    width: 347,
    height: 645,
    marginTop: -39,
    marginLeft: 18
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 375,
    marginTop: 96
  }
});

export default Untitled7;
