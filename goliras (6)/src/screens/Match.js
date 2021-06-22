import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

function Match(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button10StackStackStack}>
        <View style={styles.button10StackStack}>
          <View style={styles.button10Stack}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Configuracoesdoidioma")}
              style={styles.button10}
            ></TouchableOpacity>
            <FontAwesomeIcon
              name="gears"
              style={styles.icon4}
            ></FontAwesomeIcon>
            <View style={styles.rect3}>
              <FontAwesomeIcon
                name="align-justify"
                style={styles.icon}
              ></FontAwesomeIcon>
              <OcticonsIcon name="person" style={styles.icon3}></OcticonsIcon>
              <MaterialCommunityIconsIcon
                name="heart-multiple"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
              <FontAwesomeIcon
                name="question-circle"
                style={styles.icon5}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                name="gears"
                style={styles.icon10}
              ></FontAwesomeIcon>
            </View>
          </View>
          <View style={styles.button6Stack}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Faq")}
              style={styles.button6}
            ></TouchableOpacity>
            <Image
              source={require("../assets/images/b137e98b-5f26-453e-9814-3e103e984123.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.rect2}>
              <View style={styles.loremIpsumStack}>
                <Text style={styles.loremIpsum}></Text>
                <Text style={styles.loremIpsum2}>
                  ELX/DELXS/MASCULINXS{"\n"}ES, VILA VELHA{"\n"}
                  {"\n"}
                  {"\n"}Eu gosto de Garotxs submissxs, caminhar na{"\n"}praia.
                  SOU VEGAN E DO ROCK. ERGUEI AS {"\n"}MÃOS AO SENHOR. Estudo
                  sociologia na {"\n"} UFES
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Paresencontrados")}
            style={styles.button7}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Perfil")}
            style={styles.button8}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Match")}
            style={styles.button9}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Match")}
            style={styles.button3}
          >
            <SimpleLineIconsIcon
              name="dislike"
              style={styles.icon9}
            ></SimpleLineIconsIcon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Match")}
            style={styles.button5}
          >
            <SimpleLineIconsIcon
              name="like"
              style={styles.icon8}
            ></SimpleLineIconsIcon>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Match")}
          style={styles.button}
        >
          <EntypoIcon name="arrow-bold-left" style={styles.icon11}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Match")}
          style={styles.button2}
        >
          <EntypoIcon
            name="arrow-bold-right"
            style={styles.icon12}
          ></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Match")}
          style={styles.button4}
        >
          <FeatherIcon name="star" style={styles.icon7}></FeatherIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button10: {
    top: 682,
    left: 6,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon4: {
    top: 670,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  rect3: {
    top: 0,
    left: 0,
    width: 75,
    height: 743,
    position: "absolute",
    backgroundColor: "rgba(131,26,128,1)"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 40,
    height: 40,
    marginTop: 18,
    marginLeft: 17
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 45,
    width: 34,
    height: 48,
    marginTop: 17,
    marginLeft: 23
  },
  icon2: {
    color: "rgba(251,248,248,1)",
    fontSize: 40,
    width: 40,
    height: 45,
    marginTop: 21,
    marginLeft: 18
  },
  icon5: {
    color: "rgba(255,254,254,1)",
    fontSize: 45,
    height: 45,
    width: 39,
    marginTop: 14,
    marginLeft: 18
  },
  icon10: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 43,
    marginTop: 442,
    marginLeft: 16
  },
  button10Stack: {
    top: 9,
    left: 0,
    width: 75,
    height: 743,
    position: "absolute"
  },
  button6: {
    top: 206,
    left: 0,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  image: {
    top: 0,
    left: 20,
    width: 333,
    height: 381,
    position: "absolute"
  },
  rect2: {
    top: 359,
    left: 68,
    width: 285,
    height: 160,
    position: "absolute",
    backgroundColor: "rgba(204,204,204,1)"
  },
  loremIpsum: {
    top: 14,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsumStack: {
    width: 279,
    height: 138
  },
  button6Stack: {
    top: 0,
    left: 7,
    width: 353,
    height: 519,
    position: "absolute"
  },
  button7: {
    top: 142,
    left: 7,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  button8: {
    top: 80,
    left: 7,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  button9: {
    top: 19,
    left: 7,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  button3: {
    top: 516,
    left: 293,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon9: {
    color: "rgba(131,26,128,1)",
    fontSize: 40,
    height: 45,
    width: 40,
    marginTop: 3,
    marginLeft: 10
  },
  button5: {
    top: 516,
    left: 75,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon8: {
    color: "rgba(131,26,128,1)",
    fontSize: 40,
    height: 45,
    width: 40,
    marginLeft: 10
  },
  button10StackStack: {
    top: 0,
    left: 0,
    width: 360,
    height: 752,
    position: "absolute"
  },
  button: {
    top: 603,
    left: 108,
    width: 107,
    height: 104,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon11: {
    color: "rgba(131,26,128,1)",
    fontSize: 81,
    height: 88,
    width: 82,
    marginTop: 7,
    marginLeft: 13
  },
  button2: {
    top: 603,
    left: 215,
    width: 102,
    height: 104,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon12: {
    color: "rgba(131,26,128,1)",
    fontSize: 81,
    height: 88,
    width: 81,
    marginTop: 7,
    marginLeft: 7
  },
  button4: {
    top: 519,
    left: 184,
    width: 60,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon7: {
    color: "rgba(131,26,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 11
  },
  button10StackStackStack: {
    width: 360,
    height: 752,
    marginTop: 8
  }
});

export default Match;
