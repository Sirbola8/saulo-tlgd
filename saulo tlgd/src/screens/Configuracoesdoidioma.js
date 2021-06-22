import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Configuracoesdoidioma(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Configuracoesdoidioma")}
        style={styles.button}
      >
        <View style={styles.image3Row}>
          <Image
            source={require("../assets/images/607-6074434_flag-of-the-united-states-of-america-usa2.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.ingles}>Inglês</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.button2StackStack}>
        <View style={styles.button2Stack}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Configuracoesdoidioma")}
            style={styles.button2}
          >
            <TextInput
              placeholder="Português"
              style={styles.textInput}
            ></TextInput>
          </TouchableOpacity>
          <Image
            source={require("../assets/images/Ra06f16aaf0023ecd5ec7256f26ef3527.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Image
            source={require("../assets/images/R47f1c5c3f699ecff66f5a3acfb99e94a.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Configuracoesdoidioma")}
          style={styles.button3}
        >
          <Text style={styles.espanhol}>Espanhol</Text>
        </TouchableOpacity>
        <Text style={styles.loremIpsum}>CONFIGURAÇÕES DE IDIOMA</Text>
      </View>
      <Icon name="gears" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 351,
    height: 147,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 604,
    marginLeft: 5
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
    marginTop: 48
  },
  image3Row: {
    height: 135,
    flexDirection: "row",
    flex: 1,
    marginRight: 81,
    marginLeft: 10,
    marginTop: 6
  },
  button2: {
    top: 23,
    left: 18,
    width: 351,
    height: 134,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  textInput: {
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 34,
    width: 153,
    height: 38,
    marginTop: 46,
    marginLeft: 178
  },
  image: {
    top: 0,
    left: 18,
    width: 178,
    height: 176,
    position: "absolute"
  },
  image2: {
    top: 157,
    left: 0,
    width: 173,
    height: 182,
    position: "absolute"
  },
  button2Stack: {
    top: 12,
    left: 0,
    width: 369,
    height: 339,
    position: "absolute"
  },
  button3: {
    top: 193,
    left: 18,
    width: 351,
    height: 134,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  espanhol: {
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 34,
    marginTop: 40,
    marginLeft: 158
  },
  loremIpsum: {
    top: 0,
    left: 48,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "rgba(131,26,128,1)",
    fontSize: 21
  },
  button2StackStack: {
    width: 369,
    height: 351,
    marginTop: -512,
    marginLeft: -13
  },
  icon: {
    color: "rgba(131,26,128,1)",
    fontSize: 154,
    marginTop: -533,
    alignSelf: "center"
  }
});

export default Configuracoesdoidioma;
