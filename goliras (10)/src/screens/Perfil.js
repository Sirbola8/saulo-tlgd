import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Perfil(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/20210406_1452332.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Icon name="circle" style={styles.icon}></Icon>
      </View>
      <Text style={styles.alanFonseca}>Alan fonseca</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Paresencontrados")}
        style={styles.button4}
      >
        <Text style={styles.paresEncontrados}>Pares Encontrados</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Fotos")}
        style={styles.button2}
      >
        <Text style={styles.galeriaDeFotos}>Galeria de Fotos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Fotos")}
        style={styles.button3}
      >
        <TextInput
          placeholder="Editar perfil"
          clearTextOnFocus={false}
          enablesReturnKeyAutomatically={false}
          spellCheck={false}
          disableFullscreenUI={false}
          autoCorrect={false}
          autoFocus={false}
          blurOnSubmit={false}
          caretHidden={false}
          multiline={false}
          secureTextEntry={false}
          selectTextOnFocus={false}
          returnKeyType="done"
          style={styles.textInput}
        ></TextInput>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    top: 25,
    left: 15,
    width: 172,
    height: 150,
    position: "absolute"
  },
  icon: {
    top: 0,
    position: "absolute",
    color: "rgba(131,26,128,1)",
    fontSize: 200,
    left: 0
  },
  imageStack: {
    width: 200,
    height: 200,
    marginTop: 29,
    marginLeft: 79
  },
  alanFonseca: {
    fontFamily: "clicker-script-regular",
    color: "#121212",
    fontSize: 50,
    marginLeft: 86
  },
  button4: {
    width: 306,
    height: 49,
    backgroundColor: "rgba(131,26,128,1)",
    marginTop: 167,
    marginLeft: 25
  },
  paresEncontrados: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 10,
    marginLeft: 56
  },
  button2: {
    width: 306,
    height: 49,
    backgroundColor: "rgba(131,26,128,1)",
    marginTop: 113,
    marginLeft: 28
  },
  galeriaDeFotos: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 29,
    marginTop: 7,
    marginLeft: 51
  },
  button3: {
    width: 295,
    height: 74,
    backgroundColor: "#E6E6E6",
    marginTop: -354,
    marginLeft: 32
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    fontSize: 29,
    width: 146,
    height: 35,
    marginTop: 20,
    marginLeft: 74
  }
});

export default Perfil;
