import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Faq(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconStack}>
        <FontAwesomeIcon name="question" style={styles.icon}></FontAwesomeIcon>
        <Text style={styles.text}>F.A.Q.</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.icon2Row}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon2}
          ></IoniconsIcon>
          <Text style={styles.comoApagarAConta}>COMO APAGAR A CONTA?</Text>
        </View>
      </View>
      <View style={styles.group5}>
        <Text style={styles.loremIpsum4}>
          CLIQUE AQUI PARA ENTRAR EM CONTATO DIRETO COM A GENTE VIA E-MAIL
        </Text>
      </View>
      <View style={styles.group2}>
        <View style={styles.icon3Row}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon3}
          ></IoniconsIcon>
          <Text style={styles.loremIpsum}>COMO MUDAR DE IDIOMA?</Text>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.icon4Row}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon4}
          ></IoniconsIcon>
          <Text style={styles.loremIpsum2}>
            É POSSÍVEL SINCRONIZAR A CONTA COM {"\n"}OUTRAS MIDÍAS?
          </Text>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.icon5Row}>
          <IoniconsIcon
            name="md-radio-button-on"
            style={styles.icon5}
          ></IoniconsIcon>
          <Text style={styles.loremIpsum3}>COMO EDITAR MEU PERFIL?</Text>
        </View>
      </View>
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
  group: {
    width: 165,
    height: 17,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 65
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
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
    marginLeft: -39,
    marginTop: -13
  },
  group5: {
    width: 197,
    height: 93,
    marginTop: 278,
    marginLeft: 82
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    height: 93,
    textDecorationLine: "underline"
  },
  group2: {
    width: 33,
    height: 45,
    flexDirection: "row",
    marginTop: -345,
    marginLeft: 26
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(131,26,128,1)",
    marginLeft: 6,
    marginTop: 14
  },
  icon3Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: -176
  },
  group3: {
    width: 33,
    height: 45,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 26
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
  icon4Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: -273
  },
  group4: {
    width: 33,
    height: 45,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 26
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
  icon5Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: -183
  }
});

export default Faq;
