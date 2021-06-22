import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Chat(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.pedroBrandoStack}>
            <Text style={styles.pedroBrando}>Pedro Brando</Text>
            <MaterialCommunityIconsIcon
              name="skull"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <Image
          source={require("../assets/images/234fa30c-763d-4b2a-8269-60c21faf045c.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <View style={styles.digiteAquiRow}>
            <Text style={styles.digiteAqui}></Text>
            <Text style={styles.i3}>I</Text>
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
  rect: {
    top: 0,
    width: 360,
    height: 83,
    position: "absolute",
    backgroundColor: "rgba(121,70,119,1)",
    left: 34
  },
  pedroBrando: {
    top: 5,
    left: 0,
    position: "absolute",
    fontFamily: "georgia-regular",
    color: "#121212",
    fontSize: 27
  },
  icon: {
    top: 0,
    left: 163,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 45,
    width: 40
  },
  pedroBrandoStack: {
    width: 203,
    height: 45,
    marginTop: 20,
    marginLeft: 70
  },
  image: {
    top: 1,
    left: 0,
    width: 129,
    height: 81,
    position: "absolute"
  },
  rectStack: {
    width: 394,
    height: 83,
    marginTop: 20,
    marginLeft: -34
  },
  rect2: {
    top: 0,
    left: 9,
    width: 360,
    height: 125,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  digiteAqui: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 8
  },
  i3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 39,
    opacity: 0.5,
    marginLeft: 13
  },
  digiteAquiRow: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 223,
    marginLeft: 113,
    marginTop: 39
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
    marginTop: 512,
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
