import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <MaterialUnderlineTextbox
            style={styles.materialUnderlineTextbox}
          ></MaterialUnderlineTextbox>
        </View>
        <Image
          source={require("../assets/images/token_1_(23).png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <Image
          source={require("../assets/images/token_1_(22).png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.jukera}>JUKERA</Text>
      </View>
      <Image
        source={require("../assets/images/26842431.png")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ad5d5d"
  },
  rect1: {
    top: 7,
    left: 5,
    width: 375,
    height: 143,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  materialUnderlineTextbox: {
    height: 115,
    width: 265,
    marginLeft: 104
  },
  image2: {
    top: 0,
    left: 0,
    width: 97,
    height: 145,
    position: "absolute"
  },
  rect1Stack: {
    width: 380,
    height: 150,
    marginTop: 667,
    marginLeft: -6
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 115,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  image: {
    left: 3,
    width: 108,
    height: 119,
    position: "absolute",
    bottom: 3
  },
  jukera: {
    top: 33,
    left: 155,
    position: "absolute",
    fontFamily: "roboto-italic",
    color: "#121212",
    height: 92,
    width: 235,
    fontSize: 39
  },
  rectStack: {
    width: 390,
    height: 125,
    marginTop: -786,
    marginLeft: -1
  },
  image3: {
    width: 325,
    height: 284,
    marginTop: 71,
    marginLeft: 27
  }
});

export default Untitled3;
