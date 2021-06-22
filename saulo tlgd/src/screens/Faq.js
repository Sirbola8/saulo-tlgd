import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Faq(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Faq")}
        style={styles.button6}
      >
        <View style={styles.icon2Row}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon2}
          ></IoniconsIcon>
          <Text style={styles.comoApagarAConta}>COMO APAGAR A CONTA?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Faq")}
        style={styles.button5}
      >
        <View style={styles.icon3Row}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon3}
          ></IoniconsIcon>
          <Text style={styles.loremIpsum}>COMO MUDAR DE IDIOMA?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Faq")}
        style={styles.button3}
      >
        <View style={styles.icon4Row}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon4}
          ></IoniconsIcon>
          <Text style={styles.loremIpsum2}>
            É POSSÍVEL SINCRONIZAR A CONTA COM {"\n"}OUTRAS MIDÍAS?
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Faq")}
        style={styles.button4}
      >
        <View style={styles.icon5Row}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon5}
          ></IoniconsIcon>
          <Text style={styles.loremIpsum3}>COMO EDITAR MEU PERFIL?</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.iconStack}>
        <FontAwesomeIcon name="question" style={styles.icon}></FontAwesomeIcon>
        <Text style={styles.text}>F.A.Q.</Text>
      </View>
      <View style={styles.buttonStack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Faq")}
          style={styles.button}
        ></TouchableOpacity>
        <Text style={styles.loremIpsum4}>
          CLIQUE AQUI PARA ENTRAR EM CONTATO DIRETO COM A GENTE VIA E-MAIL
        </Text>
      </View>
      <MaterialCommunityIconsIcon
        name="home"
        style={styles.icon6}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button6: {
    width: 306,
    height: 46,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 350,
    marginLeft: 26
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 45,
    width: 33
  },
  comoApagarAConta: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 6,
    marginTop: 13
  },
  icon2Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 102
  },
  button5: {
    width: 306,
    height: 46,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 25
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 45,
    width: 33
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 6,
    marginTop: 13
  },
  icon3Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 95,
    marginLeft: 1,
    marginTop: 1
  },
  button3: {
    width: 306,
    height: 51,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 26
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 45,
    width: 33
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 6,
    marginTop: 10
  },
  icon4Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginTop: 3
  },
  button4: {
    width: 306,
    height: 46,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 26
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 45,
    width: 33
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 6,
    marginTop: 13
  },
  icon5Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 89,
    marginTop: 1
  },
  icon: {
    top: 0,
    position: "absolute",
    color: "rgba(131,26,128,1)",
    fontSize: 180,
    left: 26
  },
  text: {
    top: 167,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    fontSize: 74
  },
  iconStack: {
    width: 190,
    height: 255,
    marginTop: -510,
    marginLeft: 77
  },
  button: {
    top: 0,
    left: 0,
    width: 202,
    height: 63,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsum4: {
    top: 0,
    left: 5,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    height: 93,
    width: 197,
    textDecorationLine: "underline"
  },
  buttonStack: {
    width: 202,
    height: 93,
    marginTop: 349,
    marginLeft: 77
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -786,
    marginLeft: -36
  }
});

export default Faq;
