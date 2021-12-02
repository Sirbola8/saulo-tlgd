import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

function Sincronizacao(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TextInput
          placeholder="vincular jogos"
          style={styles.placeholder}
        ></TextInput>
      </View>
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/images/OIP_(6).jfif")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image
            source={require("../assets/images/OIP_(5).jfif")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Image
            source={require("../assets/images/OIP_(4).jfif")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Image
            source={require("../assets/images/baixados_(1).jfif")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ad5d5d"
  },
  rect: {
    width: 385,
    height: 125,
    backgroundColor: "#E6E6E6",
    marginTop: 27,
    marginLeft: -2
  },
  placeholder: {
    fontFamily: "roboto-italic",
    color: "#121212",
    height: 72,
    width: 297,
    fontSize: 40,
    marginTop: 30,
    marginLeft: 51
  },
  button: {
    top: 0,
    left: 2,
    width: 200,
    height: 157,
    position: "absolute"
  },
  image: {
    width: 200,
    height: 157
  },
  button2: {
    top: 128,
    left: 2,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image2: {
    width: 200,
    height: 200
  },
  button3: {
    top: 255,
    left: 2,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image3: {
    width: 200,
    height: 200
  },
  button4: {
    top: 391,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image4: {
    width: 200,
    height: 200
  },
  buttonStack: {
    width: 202,
    height: 591,
    marginTop: 7,
    marginLeft: 75
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -740,
    marginLeft: 204
  }
});

export default Sincronizacao;
