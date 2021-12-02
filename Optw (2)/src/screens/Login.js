import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/image_YMT2..png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/personagem-jogando-tema-de-videogame_23-21485400621.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <View style={styles.placeholderStack}>
        <TextInput
          placeholder="e-mail"
          clearTextOnFocus={false}
          secureTextEntry={true}
          keyboardType="email-address"
          style={styles.placeholder}
        ></TextInput>
        <TextInput
          placeholder="Senha"
          clearTextOnFocus={false}
          secureTextEntry={true}
          keyboardType="default"
          returnKeyType="go"
          style={styles.placeholder1}
        ></TextInput>
      </View>
      <Icon name="chevron-down-circle" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 200,
    width: 374
  },
  image2: {
    top: 130,
    left: 5,
    width: 371,
    height: 312,
    position: "absolute"
  },
  imageStack: {
    width: 376,
    height: 442,
    marginTop: 48,
    marginLeft: 1
  },
  placeholder: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 280
  },
  placeholder1: {
    top: 42,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 280
  },
  placeholderStack: {
    width: 280,
    height: 89,
    marginTop: 23,
    marginLeft: 48
  },
  icon: {
    color: "rgba(208,2,27,1)",
    fontSize: 40,
    marginTop: 49,
    marginLeft: 170
  }
});

export default Login;
