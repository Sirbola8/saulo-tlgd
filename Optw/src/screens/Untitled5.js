import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

function Untitled5(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStackStack}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <Image
              source={require("../assets/images/965b2cd6-4989-4b44-9bea-7e0bf7f1e8691.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <TextInput
            placeholder="jogos que tenho interesse"
            style={styles.placeholder}
          ></TextInput>
          <TouchableOpacity style={styles.button1}>
            <Image
              source={require("../assets/images/OIP_(4).jfif")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.lOL}>L.O.L.</Text>
          <TouchableOpacity style={styles.button2}>
            <Image
              source={require("../assets/images/baixados_(1).jfif")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.cS}>C.S.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ad5d5d"
  },
  rect: {
    top: 0,
    left: 0,
    width: 408,
    height: 551,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  image: {
    width: 388,
    height: 427,
    marginTop: 72,
    marginLeft: 4
  },
  placeholder: {
    top: 475,
    left: 50,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 100,
    width: 296,
    fontSize: 25
  },
  button1: {
    top: 507,
    left: 12,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image1: {
    width: 200,
    height: 200
  },
  lOL: {
    top: 705,
    left: 34,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 96,
    width: 133,
    fontSize: 40
  },
  button2: {
    top: 634,
    left: 182,
    width: 200,
    height: 200,
    position: "absolute"
  },
  image2: {
    width: 200,
    height: 200
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 408,
    height: 834,
    position: "absolute"
  },
  cS: {
    top: 583,
    left: 254,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 124,
    width: 163,
    fontSize: 40
  },
  rectStackStack: {
    width: 417,
    height: 834,
    marginTop: -29,
    marginLeft: -9
  }
});

export default Untitled5;
