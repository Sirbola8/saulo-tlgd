import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Faq(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconStack}>
        <FontAwesomeIcon name="question" style={styles.icon}></FontAwesomeIcon>
        <Text style={styles.text}>F.A.Q.</Text>
      </View>
      <View style={styles.button4Row}>
        <TouchableOpacity style={styles.button4}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon4}
          ></IoniconsIcon>
        </TouchableOpacity>
        <Text style={styles.loremIpsum2}>
          É POSSÍVEL SINCRONIZAR A CONTA COM {"\n"}OUTRAS MIDÍAS?
        </Text>
      </View>
      <View style={styles.icon2Row}>
        <IoniconsIcon
          name="md-radio-button-on"
          style={styles.icon2}
        ></IoniconsIcon>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.comoApagarAConta}>COMO APAGAR A CONTA?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button5Row}>
        <TouchableOpacity style={styles.button5}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon5}
          ></IoniconsIcon>
        </TouchableOpacity>
        <Text style={styles.loremIpsum3}>COMO EDITAR MEU PERFIL?</Text>
      </View>
      <View style={styles.button3Row}>
        <TouchableOpacity style={styles.button3}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon3}
          ></IoniconsIcon>
        </TouchableOpacity>
        <Text style={styles.loremIpsum}>COMO MUDAR DE IDIOMA?</Text>
      </View>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.loremIpsum4}>
          CLIQUE AQUI PARA ENTRAR EM CONTATO DIRETO COM A GENTE VIA E-MAIL
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    marginTop: 54,
    marginLeft: 77
  },
  button4: {
    width: 33,
    height: 45
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 6,
    marginTop: 10
  },
  button4Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 153,
    marginLeft: 26,
    marginRight: 28
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  button: {
    width: 165,
    height: 17,
    marginLeft: 6,
    marginTop: 14
  },
  comoApagarAConta: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)"
  },
  icon2Row: {
    height: 45,
    flexDirection: "row",
    marginTop: -158,
    marginLeft: 26,
    marginRight: 130
  },
  button5: {
    width: 33,
    height: 45
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 6,
    marginTop: 14
  },
  button5Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 124,
    marginLeft: 26,
    marginRight: 117
  },
  button3: {
    width: 33,
    height: 45
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 6,
    marginTop: 13
  },
  button3Row: {
    height: 45,
    flexDirection: "row",
    marginTop: -157,
    marginLeft: 26,
    marginRight: 124
  },
  button2: {
    width: 197,
    height: 93,
    marginTop: 207,
    marginLeft: 82
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    height: 93,
    textDecorationLine: "underline"
  }
});

export default Faq;
