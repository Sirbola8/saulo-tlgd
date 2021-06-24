import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Configuracoesdoidioma(props) {
  return (
    <View style={styles.container}>
      <Icon name="gears" style={styles.icon}></Icon>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>CONFIGURAÇÕES DE IDIOMA</Text>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/images/Ra06f16aaf0023ecd5ec7256f26ef3527.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <TextInput
              placeholder="Português"
              style={styles.textInput}
            ></TextInput>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.image2Row}>
            <Image
              source={require("../assets/images/R47f1c5c3f699ecff66f5a3acfb99e94a.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.espanhol}>Espanhol</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button3}>
        <View style={styles.image3Row}>
          <Image
            source={require("../assets/images/607-6074434_flag-of-the-united-states-of-america-usa2.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.ingles}>Inglês</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(131,26,128,1)",
    fontSize: 154,
    marginTop: 57,
    marginLeft: 97
  },
  loremIpsum: {
    top: 0,
    left: 29,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "rgba(131,26,128,1)",
    fontSize: 21
  },
  button2: {
    top: 12,
    left: 0,
    width: 331,
    height: 176,
    position: "absolute",
    flexDirection: "row"
  },
  image: {
    width: 178,
    height: 176
  },
  textInput: {
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 34,
    width: 153,
    height: 38,
    marginTop: 69
  },
  imageRow: {
    height: 176,
    flexDirection: "row",
    flex: 1
  },
  button: {
    top: 170,
    left: 7,
    width: 317,
    height: 182,
    position: "absolute",
    flexDirection: "row"
  },
  image2: {
    width: 173,
    height: 182
  },
  espanhol: {
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 34,
    marginLeft: 3,
    marginTop: 64
  },
  image2Row: {
    height: 182,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  loremIpsumStack: {
    width: 331,
    height: 352,
    marginTop: 28,
    marginLeft: 5
  },
  button3: {
    width: 261,
    height: 135,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 34
  },
  image3: {
    width: 118,
    height: 135
  },
  ingles: {
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 34,
    marginLeft: 50,
    marginTop: 49
  },
  image3Row: {
    height: 135,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  }
});

export default Configuracoesdoidioma;
