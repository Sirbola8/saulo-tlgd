import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Chat(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/234fa30c-763d-4b2a-8269-60c21faf045c.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.pedroBrando}>Pedro Brando</Text>
        <MaterialCommunityIconsIcon
          name="skull"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <View style={styles.digiteAquiStack}>
            <Text style={styles.digiteAqui}></Text>
            <MaterialDisabledTextbox
              inputStyle="Disabled Textbox"
              inputStyle="I...."
              style={styles.materialDisabledTextbox}
            ></MaterialDisabledTextbox>
          </View>
        </View>
        <Image
          source={require("../assets/images/token_1_(17).png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
      <View style={styles.icon2Stack}>
        <MaterialIconsIcon
          name="chat-bubble-outline"
          style={styles.icon2}
        ></MaterialIconsIcon>
        <Text style={styles.loremIpsum}>
          bora trocar uma ideia no bar do churros?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    left: 0,
    width: 129,
    height: 81,
    position: "absolute"
  },
  pedroBrando: {
    top: 24,
    left: 104,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 27
  },
  icon: {
    top: 19,
    left: 267,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  imageStack: {
    width: 307,
    height: 81,
    marginTop: 21,
    marginLeft: -34
  },
  rect2: {
    top: 0,
    left: 9,
    width: 360,
    height: 125,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  digiteAqui: {
    top: 3,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26
  },
  materialDisabledTextbox: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 229,
    height: 37,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  digiteAquiStack: {
    width: 229,
    height: 37,
    marginTop: 44,
    marginLeft: 113
  },
  image3: {
    top: 10,
    left: 0,
    width: 122,
    height: 106,
    position: "absolute"
  },
  rect2Stack: {
    width: 369,
    height: 125,
    marginTop: 513,
    marginLeft: -9
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(121,70,119,1)",
    fontSize: 200
  },
  loremIpsum: {
    top: 45,
    left: 42,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 81,
    width: 120
  },
  icon2Stack: {
    width: 200,
    height: 200,
    marginTop: -334,
    marginLeft: 18
  }
});

export default Chat;
