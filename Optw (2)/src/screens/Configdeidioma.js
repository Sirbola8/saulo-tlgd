import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

function Configdeidioma(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/USAball-0.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.usa}>USA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/images/R.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.portugues}>PORTUGUES</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.image3Row}>
        <Image
          source={require("../assets/images/R_(1)1.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.日本語}>日本語</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200
  },
  button2: {
    width: 110,
    height: 70,
    marginLeft: 13,
    marginTop: 59
  },
  usa: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 58
  },
  imageRow: {
    height: 200,
    flexDirection: "row",
    marginTop: 107,
    marginLeft: 4,
    marginRight: 48
  },
  image2: {
    width: 200,
    height: 200
  },
  button: {
    width: 163,
    height: 34,
    marginLeft: 3,
    marginTop: 73
  },
  portugues: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 29
  },
  image2Row: {
    height: 200,
    flexDirection: "row",
    marginTop: 63,
    marginLeft: -1,
    marginRight: 10
  },
  image3: {
    width: 200,
    height: 200
  },
  button3: {
    width: 150,
    height: 66,
    marginLeft: 10,
    marginTop: 65
  },
  日本語: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 50
  },
  image3Row: {
    height: 200,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: -2,
    marginRight: 17
  }
});

export default Configdeidioma;
